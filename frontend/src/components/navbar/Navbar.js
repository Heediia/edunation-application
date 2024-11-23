import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
             <img src={logo} alt="EduNation Logo" className="logo" />
            <ul className="navbar-links">
                <li><a href="/">Accueil</a></li>
                <li className="dropdown">
                    <span className="dropbtn">Connexion</span>
                    <div className="dropdown-content">
                        <Link to="/signin">Sign In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;