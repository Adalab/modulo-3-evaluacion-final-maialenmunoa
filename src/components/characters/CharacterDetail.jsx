import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import gryffindorImage from '../../images/gryffindor.png';
import ravenclawImage from '../../images/revenclaw.png';
import slytherinImage from '../../images/slytherin.png';
import hufflepuffImage from '../../images/hufflepuff.png';

import '../../scss/Detail.scss';

function CharacterDetail( {findCharacter}) {

  const params = useParams();
  const character = findCharacter(params.id)

  let houseImage = "";
  switch (character.house) {
    case "Gryffindor":
      houseImage = gryffindorImage;
      break;
    case "Ravenclaw":
      houseImage = ravenclawImage;
      break;
    case "Slytherin":
      houseImage = slytherinImage;
      break;
    case "Hufflepuff":
      houseImage = hufflepuffImage;
      break;
    default:
      houseImage = ""; // Puedes proporcionar una imagen por defecto o dejarla vacía si no hay ninguna imagen para la casa desconocida.
  }

    return (
      <div className="detail">
        <div className="detail__content">
          <img className="detail__content-img"
          src={character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"} 
            alt={character.name} />
            <div className="detail__content-info">
              <h1 className="detail__content-info-name">{character.name}</h1>
              <p className="detail__content-info-icon">{character.alive ? (
                <span className="alive-icon"><i className="fas fa-heart"></i></span>
              ) : (
                <span className="dead-icon"><i className="fas fa-skull"></i></span>
              )}</p>
              <p>Especie: {character.species}</p>
              <p>Género: {character.gender}</p>
              <p>Nombre alternativo: {character.alternate_names}</p>
              <p>Casa: {character.house}</p>
              {houseImage && <img className="detail__content-shield" src={houseImage} alt={character.house} />}
              <Link to="/personajes">
                <button className="detail__content-info-button">VOLVER</button>
              </Link>
            </div>
        </div>
      </div>
    )
  }

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};
  
export default CharacterDetail;