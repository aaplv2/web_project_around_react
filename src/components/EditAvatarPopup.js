import PopupWithForm from "./PopupWithForm";
import React from "react";

export function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name={"profile"}
      title={"Cambiar foto de perfil"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popout-profile__form-url form__input"
        name="avatarUrl"
        placeholder="Enlace a la imagen"
        type="url"
        required
        minLength="2"
        maxLength="100"
        data-error="span-url"
      />
      <span className="span-url-error form__input-error"></span>
    </PopupWithForm>
  );
}
