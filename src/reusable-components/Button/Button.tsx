import { useState } from "react";
import Modal from "../Modal/Modal";
import { ReactComponent as Close2 } from "../../Image/svg/close.svg";

const Button = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setModalActive(true)}
        className="block mx-auto py-5 px-7 bg-blue-400 font-bold text-lg rounded-xl hover:bg-white focus:bg-white"
        type="button"
      >
        Free consultation
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <button
          onClick={() => setModalActive(false)}
          className="modal-btn-close"
          type="button"
          data-action="close-modal"
        >
          <Close2 className="modal__svg w-[30px] h-[30px]" fill="#747474" />
        </button>
        <form id="form" className="form-2">
          <h2 className="form-title-2">Consultation</h2>

          <div className="form-div" role="group">
            <input
              className="form__input-2 border border-solid border-[#e4e4e4] mb-5 w-full h-full p-4 rounded-[10px]"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>

          <div role="group">
            <input
              className="form__input-2 border border-solid border-[#e4e4e4] mb-5 w-full h-full p-4 rounded-[10px]"
              type="tel"
              name="tel"
              id="tel"
              // style="color: rgb(170, 168, 164)"
              placeholder="Phone number"
              required
            />
          </div>

          <div role="group">
            <input
              className="form__input-2 border border-solid border-[#e4e4e4] mb-5 w-full h-full p-4 rounded-[10px]"
              type="email"
              name="email"
              id="email"
              // autocomplete="off"
              placeholder="Email"
              required
            />
          </div>
          <p className="form__agreement text-center text-black mb-6">
            By clicking the button, I give my consent to the processing of my
            personal data
          </p>

          <button
            className="form__bth-2 block w-full text-white text-center text-lg font-bold border-none rounded-[18px] bg-blue-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Button;
