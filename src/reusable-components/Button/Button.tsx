import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Button = () => {
  const [modalActive, setModalActive] = React.useState<boolean>(true);
  return (
    <>
      <button
        onClick={() => setModalActive(true)}
        className="block mx-auto py-5 px-7 bg-blue-400 font-bold text-lg rounded-xl hover:bg-white focus:bg-white"
        type="button"
      >
        Free consultation
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Button;
