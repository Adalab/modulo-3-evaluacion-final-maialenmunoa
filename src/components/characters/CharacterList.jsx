import PropTypes from "prop-types";

//Importar componente
import CharacterCard from "./CharacterCard";

//Importar estilos
import '../../scss/List.scss';

/**
 * Componente para la lista de personajes.
 * @param {Array} characters - Lista de personajes.
 * @param {string} characterFilter - Filtro de personajes por nombre.
 * @param {string} houseFilter - Filtro de personajes por casa.
 * @param {string} genderFilter - Filtro de personajes por género.
 */
function CharacterList({ characters, characterFilter, houseFilter, genderFilter }) {
  // Filtrar los personajes según los filtros aplicados
  const filteredCharacters = characters.filter(character => {
    // Filtrar por nombre
    const characterMatch = character.name.toLowerCase().includes(characterFilter.toLowerCase());

    // Filtrar por casa
    const houseMatch = houseFilter === 'all' || character.house === houseFilter;

    // Filtrar por género
    const genderMatch = !genderFilter || character.gender === genderFilter;

    return characterMatch && houseMatch && genderMatch;
  });    

  // Mostrar mensaje de error si no se encuentran personajes que coincidan con el filtro
    if (filteredCharacters.length === 0 && characterFilter.trim() !== '') {
      return <p className="list__error">No hay ningún personaje que coincida con la palabra &quot;{characterFilter}&quot;</p>;
    }
    
   // Mostrar la lista de personajes filtrados
  return (
    <div className="list">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      alive: PropTypes.bool.isRequired,
    })
  ).isRequired,
  characterFilter: PropTypes.string.isRequired,
  houseFilter: PropTypes.string.isRequired,
  genderFilter: PropTypes.string.isRequired,
};

export default CharacterList;
