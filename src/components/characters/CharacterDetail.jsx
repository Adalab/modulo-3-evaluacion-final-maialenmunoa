import PropTypes from "prop-types";
import {  Link, useParams } from "react-router-dom";

import '../../scss/Detail.scss';

function CharacterDetail( {findCharacter}) {

  const params = useParams();

  const character = findCharacter(params.id)

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
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>{character.house}</p>
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