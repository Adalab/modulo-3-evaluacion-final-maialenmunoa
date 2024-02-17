import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import '../../scss/Card.scss';

function CharacterCard( {character} ) {
  return (
    <Link to={"/personaje/" + character.id}>
      <div className="character">
        <img className="character__image"
        src={character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"} 
            alt={character.name} />
        <div className="character__info">
          <h1 className="character__info-name">{character.name}</h1>
          <div className="character__info-text">
            <p>{character.species}</p>
            <p className="character__info-text-icon">{character.alive ? (
                <span className="alive-icon"><i className="fas fa-heart"></i></span>
              ) : (
                <span className="dead-icon"><i className="fas fa-skull"></i></span>
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    alive: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired
}

export default CharacterCard;