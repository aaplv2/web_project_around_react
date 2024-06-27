import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";

export function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({ name, link });
  };
  return (
    <PopupWithForm
      name={"add"}
      title={"Añadir nuevo lugar"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={handleNameChange}
      />
      <span className="span-title-error form__input-error"></span>
      <input
        className="popout-add__form-url form__input"
        name="cardUrl"
        placeholder="Enlace a la imagen"
        type="url"
        required
        data-error="span-url"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="span-url-error form__input-error"></span>
    </PopupWithForm>
  );
}
