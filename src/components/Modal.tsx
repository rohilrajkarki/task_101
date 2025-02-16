import React from "react";

const Modal = ({ text, OnCloseClick, OnOkClick }: ModalPropsType) => {
  return (
    <div className="modal_styles">
      <div>Confirm {text}?</div>
      <div className="modal_buttons">
        <button onClick={() => OnOkClick()}>OK</button>
        <button onClick={() => OnCloseClick(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
