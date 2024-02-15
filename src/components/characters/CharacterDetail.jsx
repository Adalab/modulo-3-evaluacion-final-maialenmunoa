function CharacterDetail() {
    const character = character

    return (
      <>
        <img 
        src={character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"} 
            alt={character.name} />
        <div className="character-info">
          <h1>{character.name}</h1>
          <p>{character.alive ? 'Vivo' : 'Muerto'}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.house}</p>
        </div>
      </>
    )
  }
  
  export default CharacterDetail;