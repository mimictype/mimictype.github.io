import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import '../App.css';
import '../components/Service.css';

function ServicePage() {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="service" className="section service-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="service-container">
              <div className="subsection">
                <h3 className="subsection-title">{t('service.whatWeCanMake')}</h3>
                <div className="service-showcase">
                  <div className="service-card-large">
                    <div className="service-icon">
                      <i className="service-icon-hardware"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service-title">{t('service.hardwareTitle')}</h4>
                      <div className="service-features">
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.hardware1')}</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.hardware2')}</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.hardware3')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-card-large">
                    <div className="service-icon">
                      <i className="service-icon-app"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service-title">{t('service.appTitle')}</h4>
                      <div className="service-features">
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.app1')}</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.app2')}</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.app3')}</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.app4')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-card-large">
                    <div className="service-icon">
                      <i className="service-icon-game"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service-title">{t('service.gameTitle')}</h4>
                      <div className="service-features">
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>{t('service.game1')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="subsection">
                <h3 className="subsection-title">{t('service.processTitle')}</h3>
                <div className="process-container">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4 className="step-title">{t('service.step1Title')}</h4>
                      <p className="step-description">
                        {t('service.step1Desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4 className="step-title">{t('service.step2Title')}</h4>
                      <p className="step-description">
                        {t('service.step2Desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4 className="step-title">{t('service.step3Title')}</h4>
                      <p className="step-description">
                        {t('service.step3Desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4 className="step-title">{t('service.step4Title')}</h4>
                      <p className="step-description">
                        {t('service.step4Desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4 className="step-title">{t('service.step5Title')}</h4>
                      <p className="step-description">
                        {t('service.step5Desc')}
                      </p>
                    </div>
                  </div>
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

export default ServicePage;
