import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Header.css';
import logo from '/logo_512x160.png';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === 'ja' ? 'zh-TW' : 'ja');
  };

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
              <Link to="/service" className={`nav-link ${currentPath === '/service' ? 'active' : ''}`}>Service</Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className={`nav-link ${currentPath.includes('/works') ? 'active' : ''}`}>Works</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}>Contact</Link>
            </li>
            <li className="nav-item">
              <button className="lang-switch-btn" onClick={toggleLang} aria-label="Switch language">
                {lang === 'ja' ? '繁中' : '日本語'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
