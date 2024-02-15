import PropTypes from "prop-types";

function CharacterFilter({ characterFilter, setCharacterFilter }) {
  const handleNameChange = (event) => {
    setCharacterFilter(event.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        id="character-filter"
        placeholder="Nombre del personaje"
        value = {characterFilter}
        onChange={handleNameChange}
      />
    </>
  );
}

CharacterFilter.propTypes = {
  setCharacterFilter: PropTypes.func.isRequired,
  characterFilter: PropTypes.string.isRequired,
};

export default CharacterFilter;
