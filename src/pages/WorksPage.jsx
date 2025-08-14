import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import worksData from '../data/worksData';
import '../App.css';
import '../components/Works.css';

function WorksPage() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="section works-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="works-container">
              <div className="achievements-grid">
                {worksData.map((work) => (
                  <div key={work.id} className="achievement-item">
                    <Link to={`/works/${work.id}`} className="achievement-link">
                      <div className="achievement-icon">
                        <i className={work.icon}></i>
                      </div>
                      <div className="achievement-content">
                        <h4 className="achievement-title">{work.title}</h4>
                        <p className="achievement-description">
                          {work.description}
                        </p>
                        <div className="achievement-tech-container">
                          {work.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
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
