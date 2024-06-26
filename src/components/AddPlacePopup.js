import PopupWithForm from "./PopupWithForm";
import React from "react";

export function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name={"add"}
      title={"Añadir nuevo lugar"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popout-add__form-title form__input"
        name="cardTitle"
        placeholder="Título"
        type="text"
        required
        minLength="2"
        maxLength="30"
        data-error="span-title"
      />
      <span className="span-title-error form__input-error"></span>
      <input
        className="popout-add__form-url form__input"
        name="cardUrl"
        placeholder="Enlace a la imagen"
        type="url"
        required
        data-error="span-url"
      />
      <span className="span-url-error form__input-error"></span>
    </PopupWithForm>
  );
}
