import PropTypes from "prop-types";

// Importar componentes
import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";
import GenderFilter from "./GenderFilter";

// Importar estilos
import '../../scss/Form.scss';

/**
 * Componente para renderizar los filtros de búsqueda.
 * @param {function} setCharacterFilter - Función para establecer el filtro de personajes.
 * @param {function} setHouseFilter - Función para establecer el filtro de casas.
 * @param {function} setGenderFilter - Función para establecer el filtro de género.
 * @param {string} characterInputValue - Valor actual del filtro de personajes.
 * @param {string} houseInputValue - Valor actual del filtro de casas.
 * @param {function} handleReset - Función para restablecer todos los filtros.
 */

function Filters({ setCharacterFilter, setHouseFilter, setGenderFilter, characterInputValue, houseInputValue, handleReset }) {
    return (
      <form className="form">
        
        {/* Filtro de personaje */}
        <label htmlFor="character-filter">
        <CharacterFilter 
          setCharacterFilter={setCharacterFilter} 
          characterInputValue={characterInputValue} 
          houseInputValue={houseInputValue}/>
        </label>
        
        {/* Filtro de casa */}
        <label htmlFor="house-filter">
        <HouseFilter setHouseFilter={setHouseFilter} />
        </label>

        {/* Filtro de género */}
        <GenderFilter setGenderFilter={setGenderFilter} />

        {/* Botón de reset */}
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
  houseInputValue: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
  setGenderFilter: PropTypes.func.isRequired,
}
  
export default Filters;