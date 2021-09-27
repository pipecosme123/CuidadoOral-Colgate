import React from 'react';
import { Home } from '../../Constants/Images';
import { RoutersLinks } from '../../Constants/RoutersLinks';
import '../../css/NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <a href={RoutersLinks.home}>
                <img className="imgLogoColgate" src={Home.LogoColgate} alt="LogoColgate" />
            </a>
            <a href={`${RoutersLinks.home}#menu`}>
                <img className="imgMenu" src={Home.Menu} alt="Menu" />
            </a>
        </div>
    );
};

export default NavBar;