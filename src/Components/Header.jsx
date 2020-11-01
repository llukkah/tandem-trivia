import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import TandemLogo from '../Images/TandemLogo.png';

function Header () {
    return (
      <header className="App-header">
        <Link 
          to="/"
          className="logo">
            <img src={TandemLogo} alt="logo" />
        </Link>
        
        <div className="tandem-trivia">
          <p className="tandem">
            TANDEM
          </p>
          <p className="trivia">
            TRIVIA
          </p>
        </div>
      </header>
    )
}

export default Header;