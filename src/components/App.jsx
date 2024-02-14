import { useState, useEffect } from 'react';

import Header from './Header'
import Footer from './Footer'
import Filters from './filters/Filters'
import CharacterList from './characters/CharacterList'

import { fetchCharacters } from '../services/fetch.js';

import '../scss/App.scss'

function App() {

  //1. Variables de estado

  const [characters, setCharacters] = useState([]);

  //2. useEffect

  useEffect(() => {

    fetchCharacters()
      .then(data => {
      setCharacters(data)
    });

  }, [])

  //3. Funciones de eventos

  //4. Variables para el html

  //5. Html en el return

  return (
    <div className="page">

    <Header />

      <main>
        <section>
          <Filters />
        </section>

        <section>
          <ul>
          <CharacterList />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;