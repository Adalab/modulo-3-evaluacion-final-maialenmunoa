import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";

import '../../scss/List.scss';

function CharacterList({ characters, characterFilter, houseFilter }) {

    const filteredCharacters = characters.filter(character => {
      // Filtrar por nombre
      const characterMatch = character.name.toLowerCase().includes(characterFilter.toLowerCase());
  
      // Filtrar por casa
      const houseMatch = houseFilter === 'all' || character.house === houseFilter;
  
      return characterMatch && houseMatch;
    });

    if (filteredCharacters.length === 0 && characterFilter.trim() !== '') {
      return <p className="list__error">No hay ningún personaje que coincida con la palabra &quot;{characterFilter}&quot;</p>;
    }

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
};

export default CharacterList;
