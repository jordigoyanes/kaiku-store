export default function NavDrawer({ open, setNavDrawer }) {
  return (
    <>
      <aside
        className={
          "p-6 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-40 " +
          (open ? "-translate-x-0" : "-translate-x-full")
        }
      >
        test
        <button onClick={() => setNavDrawer(!open)}>Close</button>
      </aside>
    </>
  );
}
