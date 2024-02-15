import { useState, useEffect } from 'react';

import Header from './Header'
import Footer from './Footer'
import Filters from './filters/Filters'
import CharacterList from './characters/CharacterList'

import { fetchCharacters } from '../services/fetch.js';

import localStorage from '../services/localStorage.js';

import '../scss/App.scss'

function App() {

  //1. Variables de estado

  const [characters, setCharacters] = useState( localStorage.get('characters', []) );
  const [characterFilter, setCharacterFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('all');

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

  //4. Variables para el html

  //5. Html en el return

  return (
    <div className="page">

    <Header />

      <main>
        <section>
          <Filters setCharacterFilter={setCharacterFilter} setHouseFilter={setHouseFilter} />
        </section>

        <section>
          <CharacterList characters={characters} characterFilter={characterFilter} houseFilter={houseFilter}/>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;