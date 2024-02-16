import PropTypes from "prop-types";
import {  Link, useParams } from "react-router-dom";

function CharacterDetail( {findCharacter}) {

  const params = useParams();

  const character = findCharacter(params.id)

    return (
      <>
        <img 
        src={character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"} 
            alt={character.name} />
        <div className="character-info">
          <h1>{character.name}</h1>
          <p>{character.alive ? 'Vivo' : 'Muerto'}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.house}</p>
          <Link to="/personajes">Volver</Link>
        </div>
      </>
    )
  }

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    alive: PropTypes.bool.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
};
  
export default CharacterDetail;