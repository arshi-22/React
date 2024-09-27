export default function Modal({ children }) {
  return (
    <div className="flex justify-center items-center fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10 max-h-1vh max-1-vw">
      <div className=" p-10 bg-white">
        {children}
      </div>
    </div>
  );
}
