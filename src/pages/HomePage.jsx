import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scene3D from '../components/Scene3D';
import '../App.css';
import './HomePage.css';


function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [lightIsOn, setLightIsOn] = useState(true); // 電球状態

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scene3Dから電球状態を受け取る
  const handleLightStateChange = (isOn) => {
    setLightIsOn(isOn);
  };

  // 電球ON/OFFでテキスト用クラス名を切り替え
  const subtitleClass = isMobile
    ? (lightIsOn ? 'hero-subtitle-mobile' : 'hero-subtitle-mobile-dark')
    : (lightIsOn ? 'hero-subtitle' : 'hero-subtitle-dark');
  const subcopyClass = isMobile
    ? (lightIsOn ? 'hero-subcopy-mobile' : 'hero-subcopy-mobile-dark')
    : (lightIsOn ? 'hero-subcopy' : 'hero-subcopy-dark');

  return (
    <div className="app no-scroll-layout">
      <Header />
      <div className="scene3d-full" >
        <Scene3D onLightStateChange={handleLightStateChange} />
        <div className="container hero-overlay-text">
          <div className="hero-text-section">
            {isMobile ? (
              <>
                <p className={subtitleClass}>アイデアを、<br/>カタチにしよう！</p>
                <p className={subcopyClass}>やりたいことを伝えるだけ。<br/>仕組みと実装はお任せください！</p>
              </>
            ) : (
              <>
                <p className={subtitleClass}>アイデアを、カタチにしよう！</p>
                <p className={subcopyClass}>やりたいことを伝えるだけ。仕組みと実装はお任せください！</p>
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
