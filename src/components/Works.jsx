import { Link } from 'react-router-dom';
import './Works.css';
import worksData from '../data/worksData';

function Works() {
  return (
    <section id="works" className="section works-section">
      <div className="container">
        <h2 className="section-title">Works</h2>
        
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
  );
}

export default Works;
