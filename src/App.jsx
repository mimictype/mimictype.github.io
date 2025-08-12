import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';
import WorkDetail from './pages/works/WorkDetail';
import './App.css';

// リダイレクト処理を行うコンポーネント
function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // セッションストレージからリダイレクト先のURLを取得
    const redirectUrl = sessionStorage.getItem('redirectUrl');
    if (redirectUrl) {
      // リダイレクト先URLがあればナビゲーション
      sessionStorage.removeItem('redirectUrl');
      navigate(redirectUrl);
    }
  }, [navigate]);
  
  return null;
}

function App() {
  return (
    <Router>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:workId" element={<WorkDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
