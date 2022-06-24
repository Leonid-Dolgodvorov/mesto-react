function PopupwithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
    <div className="popup__container">
      <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}`}>
        <h2 className="popup__title"> {`${props.title}`} </h2>
        {props.children}
      </form>
      <button className="popup__close-button" type="button"></button>
    </div>
  </div>
  )
}

export default PopupwithForm