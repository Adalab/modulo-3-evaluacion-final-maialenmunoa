import github from '../images/github-icon.png'

import '../scss/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <a className="footer__btn-up" onClick={() => document.getElementById('Header').scrollIntoView()}>
                <svg className="footer__btn-up-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="90-Arrow Up"><path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"/><path d="m15.29 10.29-8 8L8.7 19.7l7.3-7.29 7.29 7.29 1.41-1.41-8-8a1 1 0 0 0-1.41 0z"/></g></svg>
            </a>
            <p className="footer__text">¿Después de todo este tiempo? Siempre...</p>
            <p className="footer__text-author">Hecho con <span role="img" aria-label="corazón">❤️</span> por Maialen</p>
            <div className="footer__link">
                <img className="footer__logo" src={github} alt="GitHub Logo" />
                <a className= "footer__logo-link" href="https://github.com/Adalab/modulo-3-evaluacion-final-maialenmunoa" target="_blank" rel="noreferrer">Repositorio</a>
            </div>
       </footer>
    )
  }
  
  export default Footer;