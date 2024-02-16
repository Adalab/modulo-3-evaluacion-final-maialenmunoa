import { Link } from "react-router-dom";

import '../scss//Home.scss';

import HarryLogo from '../images/harry-potter-logo.png';

function HomePage() {
    return (
      <div className="home">
        <div className="home__content">
        <img className="home__content-logo" src={HarryLogo} alt="Harry Potter" />
        <h1 className="home__content-title">Welcome to the world of Harry Potter!</h1>
        <p className="home__content-text">Expecto Patronum</p>
        <Link className="home__content-link" to="/personajes">
          <button className="home__content-button">ENTER{" "}</button>
        </Link>
        </div>
      </div>
    );
  }
  
  export default HomePage;