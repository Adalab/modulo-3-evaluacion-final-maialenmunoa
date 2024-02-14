import PropTypes from "prop-types";

function HouseFilter( { setHouseFilter } ) {

    const handleHouseChange = event => {
      setHouseFilter(event.target.value);
    };

    return (
      <>
        <select id="house-filter" onChange={handleHouseChange}>
          <option value="all">Todas</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </>
    )
  }

HouseFilter.propTypes = {
  setHouseFilter: PropTypes.func.isRequired,
};
  
export default HouseFilter