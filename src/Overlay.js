export default function Overlay({ isVisible, onOverlayClick }) {
  return (
    <div onClick={onOverlayClick}
      className={
        (isVisible ? "opacity-50 h-screen w-screen" : "h-0 w-0 opacity-0") +
        " duration-200 ease-in-out fixed overflow-hidden top-0 left-0 transition-opacity bg-black"
      }
    ></div>
  );
}
