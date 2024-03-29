
export function fetchCharacters() {
    return fetch('https://hp-api.onrender.com/api/characters/')
      .then( response => response.json() )
      .then( responseData => {
        return responseData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(eachCharacter => {
            return {
              id: eachCharacter.id,
              image: eachCharacter.image,
              name: eachCharacter.name,
              species: eachCharacter.species,
              house: eachCharacter.house,
              alive: eachCharacter.alive,
              gender: eachCharacter.gender,
              alternate_names: eachCharacter.alternate_names,
            }
          }
        )
      })
  }
