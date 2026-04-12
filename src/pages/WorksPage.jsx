import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import '../App.css';
import '../components/Works.css';

function WorksPage() {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="section works-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="works-container">
              <div className="achievements-grid">
                {/* creator-vote-final (決戦) */}
<div className="achievement-item">
  <Link to="/works/creator-vote-final" className="achievement-link">
    <div className="achievement-icon">
      <i className="achievement-icon-website"></i>
    </div>
    <div className="achievement-content">
      <h4 className="achievement-title">{t('works.creatorVoteFinal.title')}</h4>
      <p className="achievement-description">
        {t('works.creatorVoteFinal.desc')}
      </p>
      <div style={{ margin: '8px 0' }}>
        <a
          href="https://adultopia.github.io/creator-vote-final/"
          target="_blank"
          rel="noopener noreferrer"
          className="back-button"
          onClick={e => e.stopPropagation()}
        >
          {t('works.viewSite')}
        </a>
      </div>
      <div className="achievement-tech-container">
        <span className="tech-tag">React</span>
        <span className="tech-tag">Firebase</span>
        <span className="tech-tag">Firestore</span>
        <span className="tech-tag">Cloud Functions</span>
        <span className="tech-tag">Token Auth</span>
        <span className="tech-tag">i18next</span>
      </div>
    </div>
  </Link>
</div>
                {/* creator-vote (予選) */}
<div className="achievement-item">
  <Link to="/works/creator-vote" className="achievement-link">
    <div className="achievement-icon">
      <i className="achievement-icon-website"></i>
    </div>
    <div className="achievement-content">
      <h4 className="achievement-title">{t('works.creatorVotePre.title')}</h4>
      <p className="achievement-description">
        {t('works.creatorVotePre.desc')}
      </p>
      <div style={{ margin: '8px 0' }}>
        <a
          href="https://adultopia.github.io/creator-vote/"
          target="_blank"
          rel="noopener noreferrer"
          className="back-button"
          onClick={e => e.stopPropagation()}
        >
          {t('works.viewSite')}
        </a>
      </div>
      <div className="achievement-tech-container">
        <span className="tech-tag">React</span>
        <span className="tech-tag">Firebase Auth</span>
        <span className="tech-tag">Firestore</span>
        <span className="tech-tag">Cloud Functions</span>
        <span className="tech-tag">i18next</span>
        <span className="tech-tag">{t('tech.googleLogin')}</span>
      </div>
    </div>
  </Link>
</div>
                {/* creators-wanted */}
                <div className="achievement-item">
                  <Link to="/works/creators-wanted" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-website"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.creatorsWanted.title')}</h4>
                      <p className="achievement-description">
                        {t('works.creatorsWanted.desc')}
                      </p>
                      <div style={{ margin: '8px 0' }}>
                        <a
                          href="https://adultopia.github.io/creators-wanted/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="back-button"
                          style={{ marginBottom: '8px' }}
                          onClick={e => e.stopPropagation()}
                        >
                          {t('works.viewSite')}
                        </a>
                      </div>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">styled-components</span>
                        <span className="tech-tag">Google Apps Script</span>
                        <span className="tech-tag">Google Forms</span>
                        <span className="tech-tag">i18next</span>
                      </div>
                    </div>
                  </Link>
                </div>
               
                {/* 給与・休暇管理システム（小規模企業向け） */}
                <div className="achievement-item">
                  <div className="achievement-link" style={{ cursor: 'default', textDecoration: 'none' }}>
                    <div className="achievement-icon">
                      <i className="achievement-icon-website"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.salary.title')}</h4>
                      <p className="achievement-description">
                        {t('works.salary.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">Vite</span>
                        <span className="tech-tag">Google Apps Script</span>
                        <span className="tech-tag">Google Sheets</span>
                        <span className="tech-tag">{t('tech.googleLogin')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 柏 菓子 | Haku Gashi の公式サイト */}
                <div className="achievement-item">
                  <Link to="/works/haku-gashi-tw" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-website"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.hakuGashi.title')}</h4>
                      <p className="achievement-description">
                        {t('works.hakuGashi.desc')}
                      </p>
                      <div style={{ margin: '8px 0' }}>
                        <a
                          href="https://twsho.github.io/haku_gashi_tw/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="back-button"
                          style={{ marginBottom: '8px' }}
                          onClick={e => e.stopPropagation()}
                        >
                          {t('works.viewSite')}
                        </a>
                      </div>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">CSS</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* イベント出展用体験型モック */}
                <div className="achievement-item">
                  <Link to="/works/event-mock" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-binoculars"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.eventMock.title')}</h4>
                      <p className="achievement-description">
                        {t('works.eventMock.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Arduino</span>
                        <span className="tech-tag">UDP通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* ステアリング操作感検証用アプリ */}
                <div className="achievement-item">
                  <Link to="/works/steering-app" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-steering"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.steeringApp.title')}</h4>
                      <p className="achievement-description">
                        {t('works.steeringApp.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">UDP通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* イベント向け自動車の空間利用検証システム */}
                <div className="achievement-item">
                  <Link to="/works/car-space-system" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-car"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.carSpace.title')}</h4>
                      <p className="achievement-description">
                        {t('works.carSpace.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">Max/MSP</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">MQTT</span>
                        <span className="tech-tag">Raspberry Pi</span>
                        <span className="tech-tag">OBS</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* VR触覚デバイス＆サンプルアプリ */}
                <div className="achievement-item">
                  <Link to="/works/vr-haptic" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-vr"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.vrHaptic.title')}</h4>
                      <p className="achievement-description">
                        {t('works.vrHaptic.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Arduino</span>
                        <span className="tech-tag">LeapMotion</span>
                        <span className="tech-tag">Bluetooth通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* 歩行検出デバイス */}
                <div className="achievement-item">
                  <Link to="/works/walking-device" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-walking"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.walkingDevice.title')}</h4>
                      <p className="achievement-description">
                        {t('works.walkingDevice.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Bluetooth通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* センサーデータ記録システム */}
                <div className="achievement-item">
                  <Link to="/works/sensor-system" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-sensor"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{t('works.sensorSystem.title')}</h4>
                      <p className="achievement-description">
                        {t('works.sensorSystem.desc')}
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Arduino</span>
                        <span className="tech-tag">Bluetooth通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default WorksPage;
