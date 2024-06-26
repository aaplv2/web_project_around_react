import PopupWithForm from "./PopupWithForm";
import React from "react";

export function DeleteCardPopup(props) {
  return (
    <PopupWithForm
      name={"confirm"}
      title={"¿Estas seguro?"}
      onClose={props.onClose}
      isOpen={props.isOpen}
    ></PopupWithForm>
  );
}
