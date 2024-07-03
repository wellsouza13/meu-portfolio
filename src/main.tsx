import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

const container = document.getElementById('root');
const root = createRoot(container!); // Use createRoot with the non-null assertion operator

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
