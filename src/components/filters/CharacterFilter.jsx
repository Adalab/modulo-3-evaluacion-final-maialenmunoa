import PropTypes from "prop-types";

function CharacterFilter({ setCharacterFilter }) {
  const handleNameChange = (event) => {
    setCharacterFilter(event.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        id="character-filter"
        placeholder="Nombre del personaje"
        onChange={handleNameChange}
      />
    </>
  );
}

CharacterFilter.propTypes = {
  setCharacterFilter: PropTypes.func.isRequired,
};

export default CharacterFilter;
