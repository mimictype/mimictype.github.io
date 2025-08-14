import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../components/Contact.css';

function ContactPage() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="contact" className="section contact-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="contact-container">
              <div className="contact-info">
                <p className="contact-email">
                  <span className="email-label">Email:</span> 
                  <a href="mailto:s@mimictype.com" className="email-link">s@mimictype.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
