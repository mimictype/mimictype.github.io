import './Header.css';
import logo from '../../public/logo_512x160.png';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <img src={logo} alt="mimictype Logo" className="logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
