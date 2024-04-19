import { useEffect } from "react";

const Modal = ({ active, setActive, children }: any) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = active ? "hidden" : "auto";
    }
  }, [active]);
  return (
    <>
      <div
        onClick={() => setActive(false)}
        className={active ? "modal active" : "modal"}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={active ? "modal__content active" : "modal__content"}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
