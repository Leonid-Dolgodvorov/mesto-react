import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [statePopupAvatar, setStatePopupAvatar] = React.useState(false)
  const [statePopupProfile, setStatePopupProfile] = React.useState(false)
  const [statePopupAddPlace, setStatePopupAddPlace] = React.useState(false)
  // const [statePopupDelete, setStatePopupDelete] = React.useState(false)
  const [statePopupImage, setStatePopupImage] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

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

  const closeAllPopups = () => {
    setStatePopupAvatar(false)
    setStatePopupProfile(false)
    setStatePopupAddPlace(false)
    setStatePopupImage(false)
    setSelectedCard({})
    // setStatePopupDelete(false)
  }

  return (
    <div className="page">
    <div className="page__container">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatar}
      onEditProfile={handleEditProfile}
      onAddPlace={handleAddPlace}
      onCardClick={handleCardClick}
    />
    <Footer />
    <PopupWithForm 
      name="avatar"
      title="Обновить аватар"
      isOpen={statePopupAvatar}
      onClose={closeAllPopups}
    >
      <>
        <div className="popup__input-wrapper">
          <input 
            id="avatar"
            className="popup__input popup__input_type_avatar-link"
            type="url" 
            name="avatar"
            placeholder="Ссылка на картинку"
            autoComplete="off" 
            required 
          />
          <span id="avatar-error" className="popup__error popup__error_type_avatar"></span>
        </div>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </>
    </PopupWithForm>

    <PopupWithForm 
      name="profile"
      title="Редактировать профиль"
      isOpen={statePopupProfile}
      onClose={closeAllPopups}
    >
      <>
        <div className="popup__input-wrapper">
          <input 
            id="name" 
            className="popup__input popup__input_type_name" 
            type="text" 
            name="name" 
            placeholder="Введите ФИО" 
            autoComplete="off" 
            minLength="2" 
            maxLength="40" 
            required
          />
           <span className="popup__error popup__error_type_name"></span>
        </div>
        <div className="popup__input-wrapper">
          <input 
            id="job"
            className="popup__input popup__input_type_job"
            type="text"
            name="job"
            placeholder="Введите описание"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error popup__error_type_job"></span>
        </div>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </>
    </PopupWithForm >

    <PopupWithForm 
      name="add-place"
      title="Добавить место"
      isOpen={statePopupAddPlace}
      onClose={closeAllPopups}
    >
      <>
        <div className="popup__input-wrapper">
          <input 
            id="place"
            className="popup__input popup__input_type_place"
            type="text"
            name="place"
            placeholder="Название"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error popup__error_type_place"></span>
        </div>
        <div className="popup__input-wrapper">
          <input 
            id="link"
            className="popup__input popup__input_type_place-link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
          />
          <span id="link-error" className="popup__error popup__error_type_link"></span>
        </div>
        <button className="popup__save-button" type="submit">Создать</button>
      </>
    </PopupWithForm>

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
  );
}

export default App;
