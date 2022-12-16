import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// mobile vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
// for css: height: calc(var(--vh, 1vh) * 100);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
