import PropTypes from "prop-types";

function CharacterFilter({ setCharacterFilter, characterInputValue}) {
  const handleNameChange = (event) => {
    setCharacterFilter(event.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        id="character-filter"
        placeholder="Nombre del personaje"
        value = {characterInputValue}
        onChange={handleNameChange}
      />
    </>
  );
}

CharacterFilter.propTypes = {
  setCharacterFilter: PropTypes.func.isRequired,
  characterInputValue: PropTypes.string.isRequired,
};

export default CharacterFilter;
