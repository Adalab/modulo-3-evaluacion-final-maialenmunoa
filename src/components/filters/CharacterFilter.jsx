import PropTypes from "prop-types";

function CharacterFilter({ setNameFilter }) {
  const handleNameChange = (event) => {
    setNameFilter(event.target.value.toLowerCase());
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
  setNameFilter: PropTypes.func.isRequired,
};

export default CharacterFilter;
