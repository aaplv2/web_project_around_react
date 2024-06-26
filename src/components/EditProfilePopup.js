import { CurrentCardContext } from "../contexts/CurrentCardContext";
import PopupWithForm from "./PopupWithForm";
import React, { useContext, useEffect, useState } from "react";

export function EditProfilePopup(props) {
  const currentUser = useContext(CurrentCardContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name={"edit"}
      title={"Acerca de ti"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popout-edit__form-name form__input"
        name="profileName"
        placeholder="Nombre"
        type="text"
        required
        minLength="2"
        maxLength="40"
        data-error="span-name"
      />
      <span className="span-name-error form__input-error"></span>
      <input
        className="popout-edit__form-text form__input"
        name="profileAbout"
        placeholder="Acerca de ti"
        type="text"
        required
        minLength="2"
        maxLength="200"
        data-error="span-text"
      />
      <span className="span-text-error form__input-error"></span>
    </PopupWithForm>
  );
}
