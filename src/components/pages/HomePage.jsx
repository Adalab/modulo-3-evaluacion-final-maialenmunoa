import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div>
        <h1>Spectro Patronum</h1>
        <p>Descubre todo lo que necesitas saber sobre los personajes de Harry Potter</p>
        <Link to="/personajes">ENTRAR{" "}</Link>
      </div>
    );
  }
  
  export default HomePage;