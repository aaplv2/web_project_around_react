import PopupWithForm from "./PopupWithForm";
import React, { useRef, useState } from "react";

export function EditAvatarPopup(props) {
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name={"profile"}
      title={"Cambiar foto de perfil"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        ref={avatarRef}
      />
      <span className="span-url-error form__input-error"></span>
    </PopupWithForm>
  );
}
