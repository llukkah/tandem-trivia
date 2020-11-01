import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";

function Nav () {
    return (
        <div className="nav">
        <div className="links">
          <p>
            <Link 
              to="/about"
              className="about-link">
                About
            </Link>
          </p>
          <p>
            <Link 
              to="/question"
              className="start-link">
                Start
            </Link>
          </p>
        </div>
      </div>
    )
}

export default Nav;