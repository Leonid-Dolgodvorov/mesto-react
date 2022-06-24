function Main() {
  return (
    <main>
    <section className="profile section page__profile">
      <div className="profile__info">
        <div className="profile__avatar-edit" onClick={handleEditAvatarClick}>
          <img 
            className="profile__avatar" 
            src="№" 
            alt="Аватар профиля" 
          />
          <div className="profile__avatar-overlay"></div>
        </div>
        <div className="profile__text">
          <div className="profile__name-edit">
            <h1 className="profile__name">Жак Ив Кусто</h1>
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактирование профиля"
              onClick={handleEditProfileClick}
            >
            </button>
          </div>
          <p className="profile__job">Исследователь океана</p>
        </div>
      </div>
      <button 
        className="profile__add-button" 
        type="button" 
        onClick={handleAddPlaceClick}
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

function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar').classList.add('popup_opened')
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_profile').classList.add('popup_opened')
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add-place').classList.add('popup_opened')
}

export default Main