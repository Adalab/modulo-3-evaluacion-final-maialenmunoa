import '../scss/App.scss'

import Header from './Header'
import Footer from './Footer'
import Filters from './filters/Filters'
import CharacterList from './characters/CharacterList'

function App() {
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
  )
}

export default App
