import { Link } from "react-router-dom";

import HogwartsLogo from '../images/harry-potter-logo.png';
import HouseShield from '../images/harry_potter_escudo.png';

import '../scss/Header.scss';


function Header() {
  return (
    <Link to="/personajes">
      <header className="header">
          <img className="header__shield" src={HouseShield} alt="Escudo Harry Potter" />
          <img className="header__logo" src={HogwartsLogo} alt="Logo Hogwarts de Harry Potter" />
      </header>
    </Link>
  );
}

export default Header;
