import React from "react";

const Modal = ({ active, setActive, children }: any) => {
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
