import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
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
  );
}

export default Contact;
