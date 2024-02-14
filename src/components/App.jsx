import '../scss/App.scss'

function App() {
  return (
    <div>
      <header>Personajes de Harry Potter
      <img src="" alt="" />
      </header>

      <main>
        <section>
          <form>
            <label htmlFor="character-filter">Buscar por personaje:</label>
            <input type="text" id="character-filter" placeholder="Nombre del personaje" />
        
            <label htmlFor="house-filter">Selecciona la casa:</label>
            <select id="house-filter">
              <option value="all">Todas</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </form>
        </section>

        <section>
          <ul>
            <li>
              <img src="character-image.jpg" alt="Character Name" />
              <div className="character-info">
                <h1>Harry Potter</h1>
                <p>Wizard</p>
                <span className="status-icon alive">Vivo o muerto</span>
              </div>
            </li>
            <li>
              <img src="character-image.jpg" alt="Character Name" />
              <div className="character-info">
                <h1>Harry Potter</h1>
                <p>Wizard</p>
                <span className="status-icon alive">Vivo o muerto</span>
              </div>
            </li>
            <li>
              <img src="character-image.jpg" alt="Character Name" />
              <div className="character-info">
                <h1>Harry Potter</h1>
                <p>Wizard</p>
                <span className="status-icon alive">Vivo o muerto</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Harry Potter &copy; 2021</p>
      </footer>
    </div>
  )
}

export default App
