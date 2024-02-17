import PropTypes from "prop-types";

import '../../scss/Form.scss';


function CharacterFilter({ setCharacterFilter, characterInputValue}) {
  const handleNameChange = (event) => {
    setCharacterFilter(event.target.value.toLowerCase());
  };

  return (
    <>
      <input className="form__input"
        type="text"
        id="character-filter"
        placeholder="Busca por personaje"
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
