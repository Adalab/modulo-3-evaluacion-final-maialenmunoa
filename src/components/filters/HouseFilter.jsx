import PropTypes from "prop-types";

/**
* Componente para el filtro de casa.
* @param {function} setHouseFilter - Función para establecer el filtro de casa.
* @param {string} houseInputValue - Valor actual del filtro de casa.
*/
function HouseFilter( { setHouseFilter, houseInputValue } ) {
  /**
   * Maneja el cambio en la selección de casa.
   * @param {object} event - Evento de cambio.
   */
  const handleHouseChange = event => {
    setHouseFilter(event.target.value);
  };

    return (
      <>
        {/* Selección de casa */}
        <select className="form__input" id="house-filter" 
          value={houseInputValue}
          onChange={handleHouseChange}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="all">Todas</option>
        </select>
      </>
    )
  }

HouseFilter.propTypes = {
  houseFilter: PropTypes.string.isRequired,
  setHouseFilter: PropTypes.func.isRequired,
  houseInputValue: PropTypes.string.isRequired,
};
  
export default HouseFilter;