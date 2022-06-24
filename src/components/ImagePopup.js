function ImagePopup(props) {
  return (
    <div className={`
      popup 
      popup_type_image 
      popup_theme_dark 
      ${props.isOpen ? 'popup_opened' : ''} 
    `}>
      <div className="popup__image-on-screen">
        <img className="popup__image" alt="" />
        <span className="popup__image-text"></span>
        <button 
          className="popup__close-button"
          onClick={props.onClose}
          type="button"
        >          
        </button>
      </div>    
    </div>
  )
}

export default ImagePopup

