import editButtonPath from "../images/Edit-Button.svg";
import deleteButtonPath from "../images/card-trash.svg";
import likeButtonPath from "../images/card-like.svg";
import imageProfilePath from "../images/profile_jacques.jpg";
import closeButtonPath from "../images/close-icon.svg";

import React from "react";
import PopoutWithForm from "./PopoutWithForm";
import api from "../utils/api";
import ImagePopout from "./ImagePopout";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  });

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
      <div className="content__cards cards"></div>
      <PopoutWithForm
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
      </PopoutWithForm>
      <PopoutWithForm
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
      </PopoutWithForm>
      <PopoutWithForm
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
      </PopoutWithForm>
      <ImagePopout name={"image"} title={"Título imagen"}></ImagePopout>
      {/* <div className="popout-edit">
        <h4 className="popout-edit__title">Editar perfil</h4>
        <button className="popout-edit__button-close" type="submit">
          <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
        </button>
        <form className="popout-edit__form form">
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
          <button
            className="popout-edit__button-save form__submit"
            type="submit"
          ></button>
        </form>
      </div> */}
      {/* <div className="popout-add">
        <h4 className="popout-add__title">Nuevo lugar</h4>
        <button className="popout-add__button-close" type="submit">
          <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
        </button>
        <form className="popout-add__form form" noValidate>
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
          <button
            className="popout-add__button-save form__submit"
            type="submit"
          ></button>
        </form>
      </div> */}
      {/* <div className="popout-image">
        <button className="popout-image__button-close" type="submit">
          <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
        </button>
        <img className="popout-image__image" src=" " alt="" />
        <p className="popout-image__title"></p>
      </div> */}
      {/* <div className="popout-profile">
        <h4 className="popout-profile__title">Cambiar foto de perfil</h4>
        <button className="popout-profile__button-close" type="submit">
          <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
        </button>
        <form className="popout-profile__form form" noValidate>
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
          <button
            className="popout-profile__button-save form__submit"
            type="submit"
          ></button>
        </form>
      </div> */}
      <div className="popout-confirm">
        <h4 className="popout-confirm__title">¿Estás seguro?</h4>
        <button className="popout-confirm__button-close" type="submit">
          <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
        </button>
        <button className="popout-confirm__button" type="submit">
          Si
        </button>
      </div>
      <template id="card">
        <div className="card">
          <div className="card__top">
            <button className="card__button-trash" id="button-trash">
              <img src={deleteButtonPath} alt="Botón eliminar" />
            </button>
            <img className="card__image" src=" " alt="" />
          </div>
          <div className="card__bottom">
            <h2 className="card__title"></h2>
            <div className="card__button">
              <button className="card__button-like">
                <img src={likeButtonPath} alt="Botón like" />
              </button>
              <label className="card__button-counter">0</label>
            </div>
          </div>
        </div>
      </template>
      <div
        id="overlay"
        className={
          props.isAddPlacePopoutOpen ||
          props.isEditAvatarPopoutOpen ||
          props.isEditProfilePopoutOpen
            ? "active"
            : ""
        }
        onClick={props.onClose}
      ></div>
    </main>
  );
}

export default Main;
