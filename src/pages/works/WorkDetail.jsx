import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getWorksData } from '../../data/worksData';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import '../../App.css';
import './WorkDetail.css';

function WorkDetail() {
  const { workId } = useParams();
  const { t } = useLanguage();
  const works = getWorksData(t);
  const work = works.find(w => w.id === workId);

  if (!work) {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <div className="container" style={{ paddingTop: '40px' }}>
            <h2>{t('works.notFound')}</h2>
            <Link to="/works" className="back-button">{t('works.backToList')}</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="section work-detail-section" style={{ paddingTop: '80px' }}>
          <div className="container">
            <h2 className="section-title">{work.title}</h2>
            
            <div className="work-detail-container">
              {/* <div className="work-icon-large">
                <i className={work.icon}></i>
              </div> */}
              
              <div className="work-detail-content">
                {/* Adultopia creators-wanted 専用リンク or Haku Gashi 専用リンクを説明文の上に表示 */}
                {/* creators-wanted 一時非表示
                {work.id === "creators-wanted" && (
                  <div className="work-external-link" style={{ margin: '0 0 16px 0' }}>
                    <a
                      href="https://adultopia.github.io/creators-wanted/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="back-button"
                      style={{ marginBottom: '8px' }}
                    >
                      {t('works.viewSite')}
                    </a>
                  </div>
                )}
                */}
                {work.id === "haku-gashi-tw" && (
                  <div className="work-external-link" style={{ margin: '0 0 16px 0' }}>
                    <a
                      href="https://twsho.github.io/haku_gashi_tw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="back-button"
                      style={{ marginBottom: '8px' }}
                    >
                      {t('works.viewSite')}
                    </a>
                  </div>
                )}
                <div className="work-description">
                  <p>{work.description}</p>
                </div>
                
                <div className="work-technologies">
                  <h3>{t('works.technologies')}</h3>
                  <div className="tech-tags">
                    {work.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <Link to="/works" className="back-button">{t('works.backToList')}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default WorkDetail;
