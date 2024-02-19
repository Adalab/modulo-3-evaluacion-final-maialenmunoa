import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

//Importar imágenes de placeholders para cada casa
import gryffindorImage from "../../images/gryffindor.png";
import ravenclawImage from "../../images/revenclaw.png";
import slytherinImage from "../../images/slytherin.png";
import hufflepuffImage from "../../images/hufflepuff.png";

//Importar estilos
import "../../scss/Detail.scss";

/**
 * Componente para mostrar los detalles de un personaje.
 * @param {Object} findCharacter - Función para buscar un personaje por su ID.
 */
function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);

// Obtener la imagen de la casa correspondiente
const houseImages = {
  Gryffindor: gryffindorImage,
  Ravenclaw: ravenclawImage,
  Slytherin: slytherinImage,
  Hufflepuff: hufflepuffImage,
};
const houseImage = houseImages[character.house];

  return (
    <div className="detail">
      <div className="detail__content">
        <img
          className="detail__content-img"
          src={
            character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
          }
          alt={character.name}
        />
        <div className="detail__content-info">
          <h1 className="detail__content-info-name">{character.name}</h1>
          <p className="detail__content-info-icon">
            {character.alive ? (
              <span className="alive-icon">
                <i className="fas fa-heart"></i>
              </span>
            ) : (
              <span className="dead-icon">
                <i className="fas fa-skull"></i>
              </span>
            )}
          </p>
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          {/* Renderizar el nombre alternativo si existe */}
          {character.alternate_names &&character.alternate_names.length > 0 && (
              <p>
                Nombre alternativo:{" "}
                {character.alternate_names.map((name, index) => {
                  if (index === character.alternate_names.length - 1) {
                    return name;
                  } else {
                    return `${name}, `;
                  }
                })}
              </p>
            )}
          <p>Casa: {character.house}</p>
          {/* Mostrar el escudo de la casa si está disponible */}
          {houseImage && (
            <img
              className="detail__content-shield"
              src={houseImage}
              alt={character.house}
            />
          )}
          <Link to="/personajes">
            <button className="detail__content-info-button">VOLVER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};

export default CharacterDetail;
