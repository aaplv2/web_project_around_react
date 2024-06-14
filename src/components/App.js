import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import "../index.css";

function App() {
  const [isAddPlacePopoutOpen, setIsAddPlacePopoutOpen] = React.useState(false);
  const [isEditAvatarPopoutOpen, setIsEditAvatarPopoutOpen] =
    React.useState(false);
  const [isEditProfilePopoutOpen, setIsEditProfilePopoutOpen] =
    React.useState(false);
  const [isDeleteCardOpen, setIsDeleteCardOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopoutOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopoutOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopoutOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleDeleteCardClick = () => {
    setIsDeleteCardOpen(true);
  };

  const closeAllPopouts = () => {
    setIsAddPlacePopoutOpen(false);
    setIsEditAvatarPopoutOpen(false);
    setIsEditProfilePopoutOpen(false);
    setIsDeleteCardOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="body">
      <div className="page">
        <Header></Header>
        <Main
          isEditAvatarPopoutOpen={isEditAvatarPopoutOpen}
          isEditProfilePopoutOpen={isEditProfilePopoutOpen}
          isAddPlacePopoutOpen={isAddPlacePopoutOpen}
          isDeleteCardOpen={isDeleteCardOpen}
          selectedCard={selectedCard}
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onDeleteCardClick={handleDeleteCardClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopouts}
        ></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
