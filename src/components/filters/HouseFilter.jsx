function HouseFilter() {
    return (
      <>
        <label htmlFor="house-filter">Selecciona la casa:</label>
        <select id="house-filter">
          <option value="all">Todas</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </>
    )
  }
  
  export default HouseFilter