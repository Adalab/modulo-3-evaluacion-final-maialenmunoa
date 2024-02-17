import { Link } from "react-router-dom";

import '../scss//Home.scss';

import HarryLogo from '../images/harry-potter-logo.png';

function HomePage() {
    return (
      <div className="home">
        <div className="home__content">
        <img className="home__content-logo" src={HarryLogo} alt="Harry Potter" />
        <h1 className="home__content-title">Descubre los personajes de Harry Potter</h1>
        <p className="home__content-text">Expecto Patronum</p>
        <p className="home__content-typewriter">Draco dormiens nunquam titillandus.</p>
        <Link className="home__content-link" to="/personajes">
          <button className="home__content-button">ENTRAR{" "}</button>
        </Link>
        </div>
      </div>
    );
  }
  
  export default HomePage;