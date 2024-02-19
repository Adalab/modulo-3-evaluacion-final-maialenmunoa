import PropTypes from "prop-types";

// Importar estilos
import '../../scss/Form.scss';

/**
 * Componente para el filtro de búsqueda por nombre de personaje.
 * @param {function} setCharacterFilter - Función para establecer el filtro de personajes.
 * @param {string} characterInputValue - Valor actual del filtro de personajes.
 */
function CharacterFilter({ setCharacterFilter, characterInputValue}) {
  /**
   * Maneja el cambio en el input de búsqueda por nombre de personaje.
   * @param {object} event - Evento de cambio.
   */
  const handleNameChange = (event) => {
    setCharacterFilter(event.target.value.toLowerCase());
  };

  return (
    <>
      {/* Input para buscar por nombre de personaje */}
      <input className="form__input"
        type="text"
        id="character-filter"
        placeholder="Busca por personaje"
        value = {characterInputValue}
        onChange={handleNameChange}
      />
    </>
  );
}

CharacterFilter.propTypes = {
  setCharacterFilter: PropTypes.func.isRequired,
  characterInputValue: PropTypes.string.isRequired,
};

export default CharacterFilter;
