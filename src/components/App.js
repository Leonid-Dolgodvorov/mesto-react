import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [statePopupAvatar, setStatePopupAvatar] = React.useState(false)
  const [statePopupProfile, setStatePopupProfile] = React.useState(false)
  const [statePopupAddPlace, setStatePopupAddPlace] = React.useState(false)
  // const [statePopupDelete, setStatePopupDelete] = React.useState(false)
  const [statePopupImage, setStatePopupImage] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, cardList]) => {
        setCurrentUser(userInfo);
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setStatePopupImage(true)
  }

  const handleEditAvatar = () => {
    setStatePopupAvatar(true)
  }

  const handleEditProfile = () => {
    setStatePopupProfile(true)
  }

  const handleAddPlace = () => {
    setStatePopupAddPlace(true)
  }

  const handleUpdateUserInfo = (data) => {
    api.editUserInfo(data)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  const submitEditAvatar = (data) => {
    api.editAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setStatePopupAvatar(false)
    setStatePopupProfile(false)
    setStatePopupAddPlace(false)
    setStatePopupImage(false)
    setSelectedCard({})
    // setStatePopupDelete(false)
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter((item) => item !== card));
      })
      .catch((err) => {
      console.log(err)
      })
  }

  const handleAddPlaceSubmit = (data) => {
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
        <Header />
        <Main
          cards={cards}
          setCards={setCards}
          onEditAvatar={handleEditAvatar}
          onEditProfile={handleEditProfile}
          onAddPlace={handleAddPlace}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup 
          isOpen={statePopupAvatar}
          onClose={closeAllPopups}
          onEditAvatar={submitEditAvatar}
        >      
        </EditAvatarPopup>

        <EditProfilePopup
          isOpen={statePopupProfile}
          onClose={closeAllPopups}
          onUpdateProfileInfo={handleUpdateUserInfo}
        >      
        </EditProfilePopup>

        <AddPlacePopup 
          isOpen={statePopupAddPlace}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        >
        </AddPlacePopup>

        <PopupWithForm 
          name="delete"
          title="Вы уверены?"
          // isOpen={statePopupDelete}
          onClose={closeAllPopups}
        >
          <>
            <button className="popup__save-button" type="submit" >Да</button>
          </> 
        </PopupWithForm>

        <ImagePopup 
          isOpen={statePopupImage}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
