import "./styles.css";

export default function PhotofeedLayout({ modal, children }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
