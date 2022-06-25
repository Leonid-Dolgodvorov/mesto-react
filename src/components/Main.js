function Main(props) {
  return (
    <main>
    <section className="profile section page__profile">
      <div className="profile__info">
        <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
          <img 
            className="profile__avatar" 
            src={props.link} 
            alt="Аватар профиля" 
          />
          <div className="profile__avatar-overlay"></div>
        </div>
        <div className="profile__text">
          <div className="profile__name-edit">
            <h1 className="profile__name">{props.name}</h1>
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            >
            </button>
          </div>
          <p className="profile__job">{props.about}</p>
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
      </ul>
    </section>
    </main>
  )
}

export default Main