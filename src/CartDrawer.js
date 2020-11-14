import { useDispatch, useSelector } from "react-redux";


export default function CartDrawer({ open, setCartDrawer }) {
  const cart = useSelector(s => s.cart)
  const dispatch = useDispatch();

  function handleInputChange(e, product) {
    let value = e.target.value;
    dispatch({ type: "SET_CART_QUANTITY", payload: { ...product, quantity: value } })
  }

  return (
    <>
      <aside
        className={
          "p-6 transform top-0 right-0 w-64 sm:1/6 xl:1/6 lg:w-1/6 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-20 " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <button onClick={() => setCartDrawer(!open)}>Close</button>
        <h3 className="text-center text-3xl mb-2">Cart</h3>

        {cart.map(p => (
          <div className="mb-2" key={p.sku}>
            <div className="mb-2 flex flex-direction-row justify-content-between">
              <img
                alt=""
                className="w-20 h-20 font-bold hover:grow hover:shadow-lg"
                src={p.main_img}
              />
              <div className="flex ml-3 flex-wrap flex-col">
                <div className="flex">{p.title}</div>
                <div className="flex">${p.price}</div>
                <button className="text-sm inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { productSku: p.sku, willRemoveProduct: true } })}>Remove</button>

              </div>
            </div>
            <div className="flex w-32 flex-row items-center justify-between">
              <label htmlFor="quantity_input" className="mr-2">Quantity: </label>
              <input name="quantity_input" min="1" step="1" max={p.stock} type="number" value={p.quantity} onChange={(e) => handleInputChange(e, p)} className="flex items-center " />
            </div>
            <div className="h-1 bg-gray-200 w-100 mt-4 mb-4"></div>
          </div>
        ))}
        <button className="btn w-full p-3 text-white bg-blue-400 mt-2">Check out</button>

      </aside>
    </>
  );
}
