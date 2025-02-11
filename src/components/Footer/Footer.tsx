import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="localizations">
        <h3>Lokalizacje:</h3>
        <p>Warszawa, ul. Przykładowa 23</p>
        <p>Warszawa, ul. Przykładowa 45</p>
      </div>
      <nav className="links">
        <h3>Obserwuj nas:</h3>
        <div className="social-media-btns">
          <Link to='https://www.instagram.com/' target='_blank'><button><i className="fa-brands fa-instagram"></i></button></Link>
          <Link to='https://www.facebook.com/' target='_blank'><button><i className="fa-brands fa-facebook"></i></button></Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;