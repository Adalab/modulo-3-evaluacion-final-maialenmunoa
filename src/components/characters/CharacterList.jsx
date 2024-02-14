import PropTypes from "prop-types";

import CharacterCard from './CharacterCard';

function CharacterList({ characters, nameFilter }) {
  // Filtrar los personajes según el filtro de nombre
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      {filteredCharacters.map(character => (
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
      alive: PropTypes.bool.isRequired
    })
  ).isRequired,
  nameFilter: PropTypes.string.isRequired
};

export default CharacterList;
