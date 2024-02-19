import PropTypes from "prop-types";

import '../../scss/Form.scss';


function GenderFilter({ setGenderFilter }) {
    
    /*const handleFemaleChange = () => {
        setGenderFilter('female');
      };
    
      const handleMaleChange = () => {
        setGenderFilter('male');
      };
    
      const handleAllChange = () => {
        setGenderFilter(''); // Limpiar el filtro de género para mostrar todos los personajes
      };*/

    const handleGenderChange = event => {
        setGenderFilter(event.target.value);
    };
    

    return (
        <div className="form__filter-gender">
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