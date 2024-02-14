import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";

function Filters() {
    return (
      <form>
        <label htmlFor="character-filter">Buscar por personaje:
        <CharacterFilter />
        </label>
        
        <label htmlFor="house-filter">Selecciona la casa:
        <HouseFilter />
        </label>
      </form>
    )
  }
  
  export default Filters