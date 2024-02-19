import PropTypes from "prop-types";

/**
 * Componente para el filtro de género.
 * @param {function} setGenderFilter - Función para establecer el filtro de género.
 */
function GenderFilter({ setGenderFilter }) {
  /**
  * Maneja el cambio en la selección de género.
  * @param {object} event - Evento de cambio.
  */
  const handleGenderChange = event => {
    setGenderFilter(event.target.value);
  };
    
  return (
    <div className="form__filter-gender">
      {/* Radio buttons para seleccionar el género */}
      <input className="form__filter-gender-radio"
        type="radio"
        id="femaleCheckbox"
        name="gender"
        value="female"
        onChange={handleGenderChange}
      />
      <label className="filter-gender-label" htmlFor="femaleCheckbox">Mujer</label>&nbsp;

      <input className="form__filter-gender-radio"
        type="radio"
        id="maleCheckbox"
        name="gender"
        value="male"
        onChange={handleGenderChange}
      />
      <label className="filter-gender-label" htmlFor="maleCheckbox">Hombre</label>&nbsp;

      <input className="form__filter-gender-radio"
        type="radio"
        id="allCheckbox"
        name="gender"
        value=""
        onChange={handleGenderChange}
      />
      <label className="filter-gender-label" htmlFor="allCheckbox">Todes</label>
    </div>
  );
}

GenderFilter.propTypes = {
  setGenderFilter: PropTypes.func.isRequired,
}

export default GenderFilter;