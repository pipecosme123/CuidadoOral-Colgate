import React from 'react';
import { Link } from 'react-router-dom';
import { ImgHome } from '../../Constants/Images';
import { RoutersLinks } from '../../Constants/RoutersLinks';
import '../../css/NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to={RoutersLinks.home} className={window.location.hash === "#/MundoInfantil" ? "noVisibleNavBar" : ""}>
                <img className="imgLogoColgate" src={ImgHome.LogoColgate} alt="LogoColgate" />
            </Link>
            <Link to={`${RoutersLinks.home}#menu`}>
                <img className="imgMenu" src={ImgHome.Menu} alt="Menu" />
            </Link>
        </div>
    );
};

export default NavBar;