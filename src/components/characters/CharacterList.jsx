import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";

function CharacterList ( {characters} ) {
  const renderCharacters = characters.map( (character) => {
    return (
    <li key={character.id}>
          <CharacterCard character={character} />
    </li>
    );
  });
  return (
    <ul>
      {renderCharacters}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      alive: PropTypes.string.isRequired
    })
  ).isRequired
}
  
export default CharacterList