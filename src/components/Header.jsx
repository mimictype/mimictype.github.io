import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../public/logo_512x160.png';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="mimictype Logo" className="logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${currentPath === '/services' ? 'active' : ''}`}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className={`nav-link ${currentPath.includes('/works') ? 'active' : ''}`}>Works</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
