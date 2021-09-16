import React from 'react';
import { Home } from '../Constants/Images';
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <a href="##">
                <img className="imgLogoColgate" src={Home.LogoColgate} alt="LogoColgate" />
            </a>
            <a href="##">
                <img className="imgMenu" src={Home.Menu} alt="Menu" />
            </a>
        </div>
    );
};

export default NavBar;