import PropTypes from "prop-types";

import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";

function Filters({ setCharacterFilter, setHouseFilter, characterInputValue, handleReset }) {
    return (
      <form>
        <label htmlFor="character-filter">Buscar por personaje:
        <CharacterFilter 
          setCharacterFilter={setCharacterFilter} 
          characterInputValue={characterInputValue} />
        </label>
        
        <label htmlFor="house-filter">Selecciona la casa:
        <HouseFilter setHouseFilter={setHouseFilter} />
        </label>
        <button type="button" onClick={handleReset}>Reset</button>
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