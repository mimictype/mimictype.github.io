import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scene3D from '../components/Scene3D';
import '../App.css';
import './HomePage.css';

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app no-scroll-layout">
      <Header />
      <div className="scene3d-full" >
        <Scene3D />
        <div className="container hero-overlay-text">
          <div className="hero-text-section">
            {isMobile ? (
              <>
                <p className="hero-subtitle-mobile">アイデアを、<br/>カタチにしよう！</p>
                <p className="hero-subcopy-mobile">やりたいことを伝えるだけ。<br/>仕組みと実装はお任せください！</p>
              </>
            ) : (
              <>
                <p className="hero-subtitle">アイデアを、カタチにしよう！</p>
                <p className="hero-subcopy">やりたいことを伝えるだけ。仕組みと実装はお任せください！</p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
