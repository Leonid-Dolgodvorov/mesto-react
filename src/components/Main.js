import React from 'react'
import pencilImage from '../images/pencil.png'
import Card from './Card'
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        props.setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        props.setCards(cards => cards.filter((item) => item !== card));
      })
      .catch((err) => {
      console.log(err)
      })
  }

  return (
    <main>
    <section className="profile section page__profile">
      <div className="profile__info">
        <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
          <img 
            className="profile__avatar" 
            src={currentUser.avatar}
            alt="Аватар профиля" 
          />
          <div className="profile__avatar-overlay" style={{ backgroundImage: `url(${pencilImage})` }}></div>
        </div>
        <div className="profile__text">
          <div className="profile__name-edit">
            <h1 className="profile__name">{currentUser.name} </h1>
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
      </div>
      <button 
        className="profile__add-button" 
        type="button" 
        onClick={props.onAddPlace}
      />
    </section>
    <section className="elements section page__elements">
      <ul className="elements__list">
        {props.cards.map((card) => {
          return (
            <Card 
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete} />
          )          
        })}
      </ul>
    </section>
    </main>
  )
}

export default Main