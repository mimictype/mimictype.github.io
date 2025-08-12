import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import worksData from '../../data/worksData';
import '../../App.css';
import './WorkDetail.css';

function WorkDetail() {
  const { workId } = useParams();
  const work = worksData.find(w => w.id === workId);

  if (!work) {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <div className="container" style={{ paddingTop: '120px' }}>
            <h2>作品が見つかりませんでした</h2>
            <Link to="/works" className="back-button">作品一覧に戻る</Link>
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
        <section className="section work-detail-section" style={{ paddingTop: '120px' }}>
          <div className="container">
            <h2 className="section-title">{work.title}</h2>
            
            <div className="work-detail-container">
              <div className="work-icon-large">
                <i className={work.icon}></i>
              </div>
              
              <div className="work-detail-content">
                <div className="work-description">
                  <p>{work.description}</p>
                </div>
                
                <div className="work-technologies">
                  <h3>使用技術</h3>
                  <div className="tech-tags">
                    {work.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <Link to="/works" className="back-button">作品一覧に戻る</Link>
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
