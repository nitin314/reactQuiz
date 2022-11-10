import React from 'react';
import './NavBar.css';
import logo from './Images/ReactQuiz.png';

export default function NavBar() {
  return (
    <div className="NavBar">
        <div className="logo-container">
            <img src={logo} alt="Quiz website logo" srcset=""  />
        </div>
        <div className="nav-other-buttons">
            <button>Login</button>
            <button>Signup</button>
        </div>
    </div>
  );
}
