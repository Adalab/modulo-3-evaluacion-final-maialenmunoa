import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

// Importar componentes
import HomePage from './HomePage.jsx'
import Header from './Header'
import Footer from './Footer'
import Filters from './filters/Filters'
import CharacterList from './characters/CharacterList'
import CharacterDetail from './characters/CharacterDetail'

// Importar servicios
import { fetchCharacters } from '../services/fetch.js';
import localStorage from '../services/localStorage.js';

// Importar estilos
import '../scss/App.scss'

// Importar imágenes de placeholders para cada casa
import gryffindorPlaceholder from '../images/gryffindor_placeholder.jpg';
import hufflepuffPlaceholder from '../images/hufflepuff_placeholder.jpg';
import ravenclawPlaceholder from '../images/ravenclaw_placeholder.jpg';
import slytherinPlaceholder from '../images/slytherin_placeholder.jpg';


function App() {

  //1. Variables de estado
  const [characters, setCharacters] = useState( localStorage.get('characters', []) );
  const [characterFilter, setCharacterFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  const [genderFilter, setGenderFilter] = useState('');
  const [characterInputValue, setCharacterInputValue] = useState('');
  const [houseInputValue, setHouseInputValue] = useState('Gryffindor');
  const [genderInputValue, setGenderInputValue] = useState('');

  //2. useEffect para cargar los personajes desde la API
  useEffect(() => { 
    window.scrollTo(0, 0);
    if (!localStorage.includes('characters')) { 
      fetchCharacters()
        .then(data => {
          setCharacters(data);
          localStorage.set('characters', data);
        });
    }
  }, [])

  //3. Funciones de eventos
  const handleCharacterFilter = (value) => {
    setCharacterFilter(value.toLowerCase());
    setCharacterInputValue(value);
  };

  const handleHouseFilter = (value) => {
    setHouseFilter(value);
    setHouseInputValue(value);
  };

  const handleGenderFilter = (value) => {
    setGenderFilter(value);
    setGenderInputValue(value);
  };

  const handleReset = () => {
    setCharacterFilter('');
    setHouseFilter('Gryffindor');
    setGenderFilter('');
    setCharacterInputValue('');
    setHouseInputValue('Gryffindor');
    setGenderInputValue('');
  };

  // Filtrar personajes por género
  const filterByGender = (character) => {
    if (!genderFilter) return true;
    return character.gender === genderFilter;
  };

  // Mapea cada casa con su imagen de placeholder correspondiente
  const housePlaceholders = {
    Gryffindor: gryffindorPlaceholder,
    Hufflepuff: hufflepuffPlaceholder,
    Ravenclaw: ravenclawPlaceholder,
    Slytherin: slytherinPlaceholder,
  };

  // Filtrar personajes por imagen
  const filterByImage = (character) => {
    // Si el personaje no tiene una imagen, busca la imagen de su casa en el objeto de placeholders
    const housePlaceholder = housePlaceholders[character.house];
    return housePlaceholder !== undefined;
  };

  // Filtrar personajes
  const filteredCharacters = characters
    .filter(character => filterByGender(character))
    .filter(character => filterByImage(character))
    // .sort((a, b) => a.name.localeCompare(b.name));


  //4. Variables para el html
  // Encontrar un personaje por su ID
  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  //5. Html en el return
  return (
    <div className="page">
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personajes" element={
          <div>
          <div className="body">
            <Header />
            <section>
              <Filters
                    setCharacterFilter={handleCharacterFilter}
                    setHouseFilter={handleHouseFilter}
                    characterInputValue={characterInputValue}
                    houseInputValue={houseInputValue}
                    handleReset={handleReset}
                    setGenderFilter={handleGenderFilter}
                    genderInputValue={genderInputValue}
                  />
              <CharacterList
                    characters={filteredCharacters}
                    characterFilter={characterFilter}
                    houseFilter={houseFilter}
                    genderFilter={genderFilter}
                  />
            </section>
          </div>
          <Footer />
          </div>
         } />
        <Route path="/personaje/:id" element={
          characters.length === 0 ? (
            <div>Cargando...</div>
          ) : (
            <div>
              <div className="body">
                <Header />
                <CharacterDetail findCharacter={findCharacter} />
              </div>
              <Footer />
            </div>
          )        
        } />
      </Routes>
      </main>
    </div>
  );
}
export default App;