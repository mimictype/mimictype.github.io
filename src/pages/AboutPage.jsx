import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import '../App.css';
import '../components/About.css';

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="about" className="section about-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="subsection">
              <h3 className="subsection-title">{t('about.nameMeaning')}</h3>
              
              <div className="name-meaning">
              <p className="subsection-description">
                {t('about.nameMeaningDesc')}
              </p>

                <div className="name-item">
                  <h4 className="name-title">{t('about.mimicTitle')}</h4>
                  <p className="name-description">
                    {t('about.mimicDesc').split('\n').reduce((acc, line, i) => i === 0 ? [line] : [...acc, <br key={i} />, line], [])}
                  </p>
                </div>
                
                <div className="name-item">
                  <h4 className="name-title">{t('about.typeTitle')}</h4>
                  <p className="name-description">
                    {t('about.typeDesc').split('\n').reduce((acc, line, i) => i === 0 ? [line] : [...acc, <br key={i} />, line], [])}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">{t('about.philosophy')}</h3>
              <div className="philosophy">
                <p className="philosophy-text">
                  {t('about.philosophyText').split('\n').reduce((acc, line, i) => i === 0 ? [line] : [...acc, <br key={i} />, line], [])}
                </p>
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">{t('about.representative')}</h3>
              <div className="representative">
                <div className="representative-flex">
                  <img src="/sho2.jpg" alt={t('about.representativeName')} className="representative-photo" />
                  <div className='representative-info'>
                    <h4 className="representative-name">{t('about.representativeName')}</h4>
                    <h4 className="representative-name-yomi">{t('about.representativeNameYomi')}</h4>
                    <p className='representative-text'>{t('about.representativeEmail')}</p>
                    <p className='representative-text'>{t('about.representativeMotto')}</p>
                    
                    
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

export default AboutPage;
