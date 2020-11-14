const initialState = {
    products: [
        {
            sku: 1, title: "Blue Cup", stock: 10,
            main_img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
            price: 50
        },
        {
            sku: 2, title: "Camara Lens", stock: 10,
            main_img: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
            price: 50
        },
        {
            sku: 3, title: "Desk with chair", stock: 10,
            main_img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            ,
            price: 50
        },
        {
            sku: 4, title: "Type Writer", stock: 10,
            main_img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            , price: 50
        },
        {
            sku: 5, title: "Metallic Cup", stock: 10,
            main_img: "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            ,
            price: 50
        },
        {
            sku: 6, title: "Chocholate Cup", stock: 10,
            main_img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            ,
            price: 50
        },
        {
            sku: 7, title: "Toy", stock: 10,
            main_img: "https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            ,
            price: 50
        },
        {
            sku: 8, title: "Red Dice", stock: 10,
            main_img: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
            ,
            price: 50
        }
    ],
    cart: [],
    showCartDrawer: false,
    showNavDrawer: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(state, action.payload);
        case 'REMOVE_FROM_CART':
            return removeFromCart(state, action.payload);
        case 'TOGGLE_NAV_DRAWER':
            return { ...state, showNavDrawer: action.payload };
        case 'TOGGLE_CART_DRAWER':
            return { ...state, showCartDrawer: action.payload };
        case 'SET_CART_QUANTITY':
            return setCartQuantity(state, action.payload);
        default:
            return state;
    }
}

function setCartQuantity(state, payload) {
    if (isNaN(parseInt(payload.quantity))) {
        return state;
    }
    if (payload.quantity <= 0)
        return removeFromCart(state, { productSku: payload.sku })
    if (payload.quantity > payload.stock) {
        payload.quantity = payload.stock
    }
    let newCart = [...state.cart];
    let updatedProduct = newCart.findIndex(p => p.sku === payload.sku);
    if (updatedProduct > -1) {
        newCart[updatedProduct].quantity = payload.quantity;
    }
    return { ...state, cart: newCart }
}


function addToCart(state, product) {
    let newCart = [...state.cart]
    let updatedProduct = newCart.findIndex(p => p.sku === product.sku);
    if (updatedProduct > -1) {
        if (!updatedProduct.quantity < updatedProduct.stock) {
            newCart[updatedProduct].quantity += 1;
        }
    } else {
        newCart.push({ ...product, quantity: 1 });
    }
    return { ...state, cart: newCart }
}

function removeFromCart(state, { productSku }) {
    let newCart = [...state.cart]
    newCart = newCart.filter(p => p.sku !== productSku);
    return { ...state, cart: newCart }
}

export default rootReducer;