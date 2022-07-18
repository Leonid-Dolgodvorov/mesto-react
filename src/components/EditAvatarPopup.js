import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('');

  React.useEffect(()=> {
    avatarRef.current.value = '';
  },[props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className="popup__input-wrapper">
        <input 
          id="avatar"
          className="popup__input popup__input_type_avatar-link"
          type="url" 
          name="avatar"
          placeholder="Ссылка на картинку"
          autoComplete="off" 
          required
          ref={avatarRef}
        />
        <span id="avatar-error" className="popup__error popup__error_type_avatar"></span>
      </div>
      <button 
        className="popup__save-button" 
        type="submit"
        onClick={handleSubmit}
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;