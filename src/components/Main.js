import editButtonPath from "../images/Edit-Button.svg";

import React, { useContext } from "react";

import ImagePopup from "./ImagePopup";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentCardContext } from "../contexts/CurrentCardContext";
import { EditProfilePopup } from "./EditProfilePopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { DeleteCardPopup } from "./DeleteCardPopup";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const currentCard = useContext(CurrentCardContext);

  return (
    <main className="content">
      <div className="content__profile profile">
        <img
          className="profile__image"
          src={currentUser?.avatar}
          alt="Explorador"
        />
        <div
          className="profile__image-hover"
          onClick={props.onEditAvatarClick}
        ></div>
        <div className="profile__info">
          <div className="profile__info-top">
            <h2 className="profile__info-name">{currentUser?.name}</h2>
            <button
              className="profile__button-edit"
              onClick={props.onEditProfileClick}
            >
              <img src={editButtonPath} alt="Botón editar" />
            </button>
          </div>
          <p className="profile__info-subtitle">{currentUser?.about}</p>
        </div>
        <button
          className="profile__button-add"
          onClick={props.onAddPlaceClick}
        ></button>
      </div>
      <div className="content__cards cards">
        {currentCard?.map((card) => {
          return (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              onDeleteCardClick={props.onDeleteCardClick}
              onCardLike={props.handleCardLike}
              onCardDelete={props.handleCardDelete}
            ></Card>
          );
        })}
      </div>
      <EditProfilePopup
        isOpen={props.isEditProfilePopoutOpen}
        onClose={props.onClose}
        onUpdateUser={props.onUpdateUser}
      ></EditProfilePopup>
      <AddPlacePopup
        isOpen={props.isAddPlacePopoutOpen}
        onClose={props.onClose}
        onAddPlace={props.onAddPlace}
      ></AddPlacePopup>
      <EditAvatarPopup
        isOpen={props.isEditAvatarPopoutOpen}
        onClose={props.onClose}
        onUpdateAvatar={props.onUpdateAvatar}
      ></EditAvatarPopup>
      <DeleteCardPopup
        isOpen={props.isDeleteCardOpen}
        onClose={props.onClose}
      ></DeleteCardPopup>
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
