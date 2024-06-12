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

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopoutOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopoutOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopoutOpen(true);
  };

  const closeAllPopouts = () => {
    setIsAddPlacePopoutOpen(false);
    setIsEditAvatarPopoutOpen(false);
    setIsEditProfilePopoutOpen(false);
  };

  return (
    <div className="body">
      <div className="page">
        <Header></Header>
        <Main
          isEditAvatarPopoutOpen={isEditAvatarPopoutOpen}
          isEditProfilePopoutOpen={isEditProfilePopoutOpen}
          isAddPlacePopoutOpen={isAddPlacePopoutOpen}
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onClose={closeAllPopouts}
          // onCardClick={() => handleCardClick()}
        ></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
