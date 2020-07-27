import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
         Rupesh Gaudel Regmi
         </h3>
        <div className="social-container">
          <p>@Social Links</p>
        <a
    href="https://www.facebook.com/profile.php?id=100005387297448"
    className="facebook social"
 >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
 </a>
 <a
    href="https://www.linkedin.com/in/rupesh-gaudel-7a7863196/"
    className="linkedin social"
 >
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
 </a>
       </div>
      </header>
    </div>
  );
}

export default App;
