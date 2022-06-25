import api from "../utils/Api";
import React from 'react';
import pencilImage from '../images/pencil.png';

function Main(props) {

  const [userName, setuserName] = React.useState('')
  const [userDescription, setuserDescription] = React.useState('')
  const [userAvatar, setuserAvatar] = React.useState('')
  const [cards, setCards] = React.useState()


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then (([userInfo, cardList]) => {
        setuserName(userInfo.name);
        setuserDescription(userInfo.about);
        setuserAvatar(userInfo.avatar);
        setCards(cardList);
        console.log(cardList)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

/*   React.useEffect(() => {
    api.getUserInfo()
      .then ((userInfo) => {
        setuserName(userInfo.name);
        setuserDescription(userInfo.about);
        setuserAvatar(userInfo.avatar);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) */

  return (
    <main>
    <section className="profile section page__profile">
      <div className="profile__info">
        <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
          <img 
            className="profile__avatar" 
            src={userAvatar} 
            alt="Аватар профиля" 
          />
          <div className="profile__avatar-overlay" style={{ backgroundImage: `url(${pencilImage})` }}></div>
        </div>
        <div className="profile__text">
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            >
            </button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
      </div>
      <button 
        className="profile__add-button" 
        type="button" 
        onClick={props.onAddPlace}
      >
      </button>
    </section>
    <section className="elements section page__elements">
      <ul className="elements__list">
        {/* cards.map((card) => {
          return (
            <li className="card" id={card._id}>
              <button className="card__delete-button" type="button"></button>
              <img className="card__pic" alt='' />
              <div className="card__text">
                <h2 className="card__name"></h2>
                <div className="card__likes-wrapper">
                  <button className="card__like-button" type="button"></button>
                  <p className="card__likes-quantity"></p>
                </div>
              </div>        
            </li>
          )
        }) */}
      </ul>
    </section>
    </main>
  )
}

export default Main