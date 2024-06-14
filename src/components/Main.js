import editButtonPath from "../images/Edit-Button.svg";

import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { Card } from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);
  return (
    <main className="content">
      <div className="content__profile profile">
        <img className="profile__image" src={userAvatar} alt="Explorador" />
        <div
          className="profile__image-hover"
          onClick={props.onEditAvatarClick}
        ></div>
        <div className="profile__info">
          <div className="profile__info-top">
            <h2 className="profile__info-name">{userName}</h2>
            <button
              className="profile__button-edit"
              onClick={props.onEditProfileClick}
            >
              <img src={editButtonPath} alt="Botón editar" />
            </button>
          </div>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          onClick={props.onAddPlaceClick}
        ></button>
      </div>
      <div className="content__cards cards">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              onDeleteCardClick={props.onDeleteCardClick}
            ></Card>
          );
        })}
      </div>
      <PopupWithForm
        name={"edit"}
        title={"Acerca de ti"}
        isOpen={props.isEditProfilePopoutOpen}
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
      <PopupWithForm
        name={"add"}
        title={"Añadir nuevo lugar"}
        isOpen={props.isAddPlacePopoutOpen}
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
      <PopupWithForm
        name={"profile"}
        title={"Cambiar foto de perfil"}
        isOpen={props.isEditAvatarPopoutOpen}
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
      <PopupWithForm
        name={"confirm"}
        title={"¿Estas seguro?"}
        onClose={props.onClose}
        isOpen={props.isDeleteCardOpen}
      ></PopupWithForm>
      <ImagePopup
        card={props.selectedCard}
        onClose={props.onClose}
      ></ImagePopup>
      <div
        id="overlay"
        className={
          props.isAddPlacePopoutOpen ||
          props.isEditAvatarPopoutOpen ||
          props.isEditProfilePopoutOpen ||
          props.selectedCard.link ||
          props.isDeleteCardOpen
            ? "active"
            : ""
        }
        onClick={props.onClose}
      ></div>
    </main>
  );
}

export default Main;
