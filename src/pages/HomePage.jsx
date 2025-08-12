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
              <div className="hero-text-section">
                <p className="hero-subtitle">アイデアを、形にしよう</p>
                <p className="hero-subcopy">やりたいことを伝えるだけ。仕組みと実装はお任せください！</p>
              </div>
              {/* <div className="hero-buttons">
                <Link to="/works" className="hero-button">実績を見る</Link>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
