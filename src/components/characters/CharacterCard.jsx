import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function CharacterCard( {character} ) {
  return (
    <Link to={"/personaje/" + character.id}>
      <div>
        <img 
        src={character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"} 
            alt={character.name} />
        <div className="character-info">
          <h1>{character.name}</h1>
          <p>{character.species}</p>
          <p>{character.alive ? 'Vivo' : 'Muerto'}</p>
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