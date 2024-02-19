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
        <div>
        <input
            type="radio"
            id="femaleCheckbox"
            name="gender"
            value="female"
            onChange={handleGenderChange}
        />
        <label htmlFor="femaleCheckbox">Mujer</label>&nbsp;

        <input
            type="radio"
            id="maleCheckbox"
            name="gender"
            value="male"
            onChange={handleGenderChange}
        />
        <label htmlFor="maleCheckbox">Hombre</label>&nbsp;

        <input
            type="radio"
            id="allCheckbox"
            name="gender"
            value=""
            onChange={handleGenderChange}
        />
        <label htmlFor="allCheckbox">Todes</label>
        </div>
    );
}

GenderFilter.propTypes = {
  handleMaleChange: PropTypes.func.isRequired,
  handleFemaleChange: PropTypes.func.isRequired,
  setGenderFilter: PropTypes.func.isRequired,
}

export default GenderFilter;