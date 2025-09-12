import React from 'react';
import './LoadingScreen.css';


function LoadingScreen({ fadeOut }) {
  return (
      <div className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
        <div className="loading-screen-logo-container">
          <img src="/logo.PNG" alt="Logo" className="loading-logo" />
          <div className={`logo-overlay${fadeOut ? ' animate-overlay' : ''}`}></div>
          <p>Loading...</p>
        </div>
      </div>
  );
}

export default LoadingScreen;
