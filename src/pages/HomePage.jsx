import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import './HomePage.css';

function HomePage() {
  
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="section hero-section">
          <div className="container">
            <div className="hero-content">
              <Link to="/" className="logo-link">
                <h1 className="hero-title">mimictype</h1>
              </Link>
              <p className="hero-subtitle">目的はひとつ、方法は無限。</p>
              <div className="hero-buttons">
                <Link to="/about" className="hero-button">About</Link>
                <Link to="/services" className="hero-button">Services</Link>
                <Link to="/works" className="hero-button">Works</Link>
                <Link to="/contact" className="hero-button">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
