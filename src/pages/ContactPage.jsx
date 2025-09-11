
import { useState  } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../components/Contact.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });
    try {
      const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSctDMqUB7EKtwIgYCM_bBLwwIYxP_6evDPfUNkt4INWI14BYA/formResponse';
      const formEntryData = new FormData();
      formEntryData.append('entry.821818326', formData.name); // お名前
      formEntryData.append('entry.94023405', formData.email); // メール
      formEntryData.append('entry.2103905820', formData.message); // メッセージ
      await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formEntryData
      });
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: '送信しました。' }
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: '失敗しました。時間をおいて再度お試しください。' }
      });
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
            <div className="contact-container">
              <div className="contact-email-info">
                <a href="mailto:s@mimictype.com" className="contact-email-link">s@mimictype.com</a><br />
                もしくは下記フォームからご連絡ください
              </div>
              <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: '2rem', width: '100%' }}>
                <div className="form-group">
                  <label htmlFor="name">お名前</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">メールアドレス</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">ご用件</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={status.submitting}>
                  {status.submitting ? '送信中...' : '送信'}
                </button>
                {status.info.msg && (
                  <div className={`status-message${status.info.error ? ' error' : ''}`} style={{ marginTop: '1rem' }}>
                    {status.info.msg}
                  </div>
                )}
              </form>
            </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
