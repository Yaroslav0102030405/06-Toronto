import React from "react";

const Modal = ({ active, setActive }: any) => {
  //   const [active, setlActive] = React.useState<boolean>(true);
  return (
    <>
      <div
        onClick={() => setActive(false)}
        className={active ? "modal active" : "modal"}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal__content p-5 rounded-xl bg-white h-[200px] w-[400px]"
        ></div>
      </div>
    </>
  );
};

export default Modal;
