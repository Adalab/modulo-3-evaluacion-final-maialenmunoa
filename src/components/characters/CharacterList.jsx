import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";

function CharacterList({ characters, characterFilter, houseFilter }) {
  // // Filtrar los personajes según el filtro de nombre
  // const filteredCharacters = characters.filter(character =>
  //   character.name.toLowerCase().includes(characterFilter.toLowerCase())
  // );

    const filteredCharacters = characters.filter(character => {
      // Filtrar por nombre
      const characterMatch = character.name.toLowerCase().includes(characterFilter.toLowerCase());
  
      // Filtrar por casa
      const houseMatch = houseFilter === 'all' || character.house === houseFilter;
  
      return characterMatch && houseMatch;
    });

    if (filteredCharacters.length === 0 && characterFilter.trim() !== '') {
      return <p>No hay ningún personaje que coincida con la palabra {characterFilter}</p>;
    }

  return (
    <div>
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
