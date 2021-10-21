import React, { useEffect } from 'react';
import ButtonMenu from '../Components/ProductoIdeal/ButtonMenu';
import NavBar from '../Components/Home/NavBar';
import { Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Menu.css';
import { HashRouter, Link } from 'react-router-dom';

const Menu = () => {

    useEffect(() => {
        window.scroll({
            top: window.screen.width,
            left: 0
        });

        const noScroll = () => {
            window.scrollTo(window.location.hash === "#/Menu" ? 0 : window.scrollX, window.screen.width);
            // console.log(window.location.hash);
        }

        setTimeout(() => {
            window.addEventListener('scroll', noScroll);
        }, 500)

    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <div className="menuProductoIdeal">
                <HashRouter>
                    <Link to={RoutersLinks.multibeneficios}><ButtonMenu imgData={Botones_Listones.Multibeneficios} self="self scale" /></Link>
                    <Link to={RoutersLinks.blanqueamiento}><ButtonMenu imgData={Botones_Listones.Blanqueamiento} self="self scale" /></Link>
                    <Link to={RoutersLinks.saludNatural}><ButtonMenu imgData={Botones_Listones.SaludNatural} self="self scale" /></Link>
                    <Link to={RoutersLinks.cuidadoFamiliar}><ButtonMenu imgData={Botones_Listones.CuidadoFamiliar} self="self scale" /></Link>
                    <Link to={RoutersLinks.sensibilidad}><ButtonMenu imgData={Botones_Listones.Sensibilidad} self="self scale" /></Link>
                    <Link to={RoutersLinks.infantil}><ButtonMenu imgData={Botones_Listones.Infantil} self="self scale" /></Link>
                </HashRouter>
            </div>
        </div>
    );
};

export default Menu;