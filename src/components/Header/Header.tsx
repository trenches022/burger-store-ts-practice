import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-links">
        <Link to='/'>Główna</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/create'>Stwórz burgera</Link>
      </nav>
    </div>
  )
}

export default Header;