import PropTypes from "prop-types";

/**
 * Componente para el filtro de casa.
 * @param {function} setHouseFilter - Función para establecer el filtro de casa.
 * @param {string} houseFilter - Valor actual del filtro de casa.
 */
function HouseFilter( { setHouseFilter, houseFilter } ) {
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
          value={houseFilter}
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
};
  
export default HouseFilter;