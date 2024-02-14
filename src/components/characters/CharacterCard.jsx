
function CharacterCard() {
  return (
    <>
      <img src="character-image.jpg" alt="" />
      <div className="character-info">
        <h1>Harry Potter</h1>
        <p>Wizard</p>
        <span className="status-icon alive">Vivo o muerto</span>
      </div>
    </>
  )
}

export default CharacterCard