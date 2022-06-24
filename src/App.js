import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {
  return (
    <div className="page">
    <div className="page__container">
    <Header />
    <Main />
    <Footer />
    <PopupWithForm 
      name="avatar"
      title="Обновить аватар"
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
    >
      <>
        <h2 className="popup__title">Вы уверены?</h2>
        <button className="popup__save-button" type="submit" >Да</button>
      </> 
    </PopupWithForm>

    <ImagePopup />

  <template id="card-template">
    <li className="card">
        <button className="card__delete-button" type="button"></button>
        <img className="card__pic" alt="" />
        <div className="card__text">
            <h2 className="card__name"></h2>
            <div className="card__likes-wrapper">
              <button className="card__like-button" type="button"></button>
              <p className="card__likes-quantity">0</p>
            </div>
        </div>        
    </li>
  </template>

  </div>
  </div>
  );
}

export default App;
