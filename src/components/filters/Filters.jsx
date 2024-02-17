import PropTypes from "prop-types";

import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";

import '../../scss/Form.scss';

function Filters({ setCharacterFilter, setHouseFilter, characterInputValue, handleReset }) {
    return (
      <form className="form">
        <label htmlFor="character-filter">
        <CharacterFilter 
          setCharacterFilter={setCharacterFilter} 
          characterInputValue={characterInputValue} />
        </label>
        
        <label htmlFor="house-filter">
        <HouseFilter setHouseFilter={setHouseFilter} />
        </label>
        <button className="form__reset" type="button" onClick={handleReset}>
          <span className="form__trash-icon"><i className="fa-solid fa-trash-can"></i></span>
        </button>
      </form>
    )
  }

Filters.propTypes = {
  setCharacterFilter: PropTypes.func.isRequired,
  setHouseFilter: PropTypes.func.isRequired,
  characterInputValue: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
}
  
export default Filters