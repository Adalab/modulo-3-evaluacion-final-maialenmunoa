import github from '../images/github-icon.png'

import '../scss/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">¿Después de todo este tiempo? Siempre...</p>
            <p className="footer__text-author">Hecho con <span role="img" aria-label="corazón">❤️</span> por Maialen</p>
            <div className="footer__link">
                <img className="footer__logo" src={github} alt="GitHub Logo" />
                <a className= "footer__logo-link" href="https://github.com/Adalab/modulo-3-evaluacion-intermedia-maialenmunoa" target="_blank" rel="noreferrer">Repositorio</a>
            </div>
       </footer>
    )
  }
  
  export default Footer;