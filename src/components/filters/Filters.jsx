import PropTypes from "prop-types";

import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";

function Filters({ setNameFilter }) {
    return (
      <form>
        <label htmlFor="character-filter">Buscar por personaje:
        <CharacterFilter setNameFilter={setNameFilter} />
        </label>
        
        <label htmlFor="house-filter">Selecciona la casa:
        <HouseFilter />
        </label>
      </form>
    )
  }

Filters.propTypes = {
  setNameFilter: PropTypes.func.isRequired
}
  
export default Filters