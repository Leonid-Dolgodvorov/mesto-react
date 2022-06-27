import React from 'react'
import api from "../utils/Api"
import pencilImage from '../images/pencil.png'
import Card from './Card'

function Main(props) {

  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then (([userInfo, cardList]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
        {cards.map((card) => {
          return ( <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          )          
        })}
      </ul>
    </section>
    </main>
  )
}

export default Main