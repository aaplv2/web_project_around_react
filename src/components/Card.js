import React from "react";

import deleteButtonPath from "../images/card-trash.svg";
import likeButtonPath from "../images/card-like.svg";

export const Card = (props) => {
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };
  return (
    <div className="card">
      <div className="card__top">
        <button
          className="card__button-trash"
          id="button-trash"
          onClick={props.onDeleteCardClick}
        >
          <img src={deleteButtonPath} alt="Botón eliminar" />
        </button>
        <img
          className="card__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />
      </div>
      <div className="card__bottom">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__button">
          <button className="card__button-like">
            <img src={likeButtonPath} alt="Botón like" />
          </button>
          <label className="card__button-counter">
            {props.card.likes.length}
          </label>
        </div>
      </div>
    </div>
  );
};
