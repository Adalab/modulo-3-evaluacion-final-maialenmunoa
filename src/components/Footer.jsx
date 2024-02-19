import github from '../images/github-icon.png'

import '../scss/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            {/* Botón para volver arriba */}
            <a className="footer__btn-up" onClick={() => document.getElementById('Header').scrollIntoView()}>
                <svg className="footer__btn-up-img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#73151E"></path> <path d="M8.46967 12.9697C8.17678 13.2626 8.17678 13.7374 8.46967 14.0303C8.76256 14.3232 9.23744 14.3232 9.53033 14.0303L12 11.5607L14.4697 14.0303C14.7626 14.3232 15.2374 14.3232 15.5303 14.0303C15.8232 13.7374 15.8232 13.2626 15.5303 12.9697L12.5303 9.96967C12.2374 9.67678 11.7626 9.67678 11.4697 9.96967L8.46967 12.9697Z" fill="#73151E"></path> </g></svg>
            </a>
            {/* Texto del pie de página */}
            <p className="footer__text">¿Después de todo este tiempo? Siempre...</p>
            <p className="footer__text-author">Hecho con <span role="img" aria-label="corazón">❤️</span> por Maialen</p>
            {/* Enlace al repositorio de GitHub */}
            <div className="footer__link">
                <img className="footer__logo" src={github} alt="GitHub Logo" />
                <a className= "footer__logo-link" href="https://github.com/Adalab/modulo-3-evaluacion-final-maialenmunoa" target="_blank" rel="noreferrer">Repositorio</a>
            </div>
       </footer>
    )
  }
  
  export default Footer;