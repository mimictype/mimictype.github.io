import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="copyright">
          &copy; {currentYear} mimictype All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
