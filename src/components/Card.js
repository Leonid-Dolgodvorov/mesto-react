function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button className="card__delete-button" type="button"></button>
      <img
        onClick={handleClick}
        className="card__pic" 
        alt={`картинка ${props.card.name}`} 
        src={props.card.link} />
      <div className="card__text">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes-wrapper">
          <button className="card__like-button" type="button"></button>
          <p className="card__likes-quantity">{props.card.likes.length}</p>
        </div>
      </div>        
    </li>
  )
}

export default Card