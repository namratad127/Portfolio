import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedin, faGithub);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
    <App />
  </>
  </React.StrictMode>,
)
