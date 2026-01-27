import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scene3D from '../components/Scene3D';
import LoadingScreen from '../components/LoadingScreen';
import '../App.css';
import './HomePage.css';


function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [lightIsOn, setLightIsOn] = useState(true); // 電球状態（初期値をtrueに）
  const [sceneLoaded, setSceneLoaded] = useState(false); // 3Dシーンのロード状態
  const [fadeOutLoading, setFadeOutLoading] = useState(false); // ローディングフェード

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

  // 3Dモデルロード完了時に呼ばれる
  const handleSceneLoaded = () => {
    setFadeOutLoading(true);
    setTimeout(() => {
      setSceneLoaded(true);
    }, 900); // CSSのtransitionより少し長め
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
        {!sceneLoaded && (
          <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: 10000}}>
            <LoadingScreen fadeOut={fadeOutLoading} />
          </div>
        )}
        <Scene3D onLightStateChange={handleLightStateChange} onSceneLoaded={handleSceneLoaded} />
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
