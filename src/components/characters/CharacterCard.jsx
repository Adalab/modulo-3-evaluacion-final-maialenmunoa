import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Importar imágenes de placeholders para cada casa
import gryffindorImage from '../../images/gryffindor_placeholder.jpg';
import hufflepuffImage from '../../images/hufflepuff_placeholder.jpg';
import ravenclawImage from '../../images/ravenclaw_placeholder.jpg';
import slytherinImage from '../../images/slytherin_placeholder.jpg';

//Importar estilos
import '../../scss/Card.scss';

/**
 * Componente para mostrar la tarjeta de un personaje.
 * @param {Object} character - Información del personaje.
 */
function CharacterCard( {character} ) {
  // Definir las imágenes de las casas
  const houseImages = {
    Gryffindor: gryffindorImage,
    Hufflepuff: hufflepuffImage,
    Ravenclaw: ravenclawImage,
    Slytherin: slytherinImage,
  };

  // Obtener la imagen del personaje o la de la casa si no tiene
  const characterImage = character.image || houseImages[character.house];

  return (
    <Link to={"/personaje/" + character.id}>
      <div className="character">
        <img className="character__image"
        src={characterImage} />
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
    gender: PropTypes.string,
    house: PropTypes.string,
  }).isRequired
}

export default CharacterCard;