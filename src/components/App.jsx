import { useState, useEffect } from 'react';

import Header from './Header'
import Footer from './Footer'
import Filters from './filters/Filters'
import CharacterList from './characters/CharacterList'
import CharacterDetail from './characters/CharacterDetail'
import HomePage from './pages/HomePage'

import { fetchCharacters } from '../services/fetch.js';

import localStorage from '../services/localStorage.js';
import { Route, Routes } from "react-router-dom";

import '../scss/App.scss'

function App() {

  //1. Variables de estado

  const [characters, setCharacters] = useState( localStorage.get('characters', []) );
  const [characterFilter, setCharacterFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('all');

  // Guardar el estado del filtro de personaje en el estado de App
  const [characterInputValue, setCharacterInputValue] = useState('');

  //2. useEffect

  useEffect(() => {

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
    // Guardar el valor del input en el estado de App
    setCharacterInputValue(value);
  };

  const handleHouseFilter = (value) => {
    setHouseFilter(value);
  };

  //4. Variables para el html

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
          <Header />
          <section>
            <Filters
                  characterFilter={characterFilter}
                  houseFilter={houseFilter}
                  setCharacterFilter={handleCharacterFilter}
                  setHouseFilter={handleHouseFilter}
                  characterInputValue={characterInputValue}
                />
            <CharacterList
                  characters={characters}
                  characterFilter={characterFilter}
                  houseFilter={houseFilter}
                />
          </section>
          <Footer />
          </div>
         } />

        <Route path="/personaje/:id" element={
          <div>
            <Header />
            <CharacterDetail findCharacter={findCharacter} />
            <Footer />
          </div>
        } />
      </Routes>

      </main>
    </div>
  );
}

export default App;