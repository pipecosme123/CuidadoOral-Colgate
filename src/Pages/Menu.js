import React from 'react';
import ButtonMenu from '../Components/ButtonMenu';
import NavBar from '../Components/NavBar';
import { Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Menu.css';

const Menu = () => {
    return (
        <div className="menuProductoIdeal">
            <NavBar></NavBar>
            <a href={RoutersLinks.multibeneficios}><ButtonMenu imgData={Botones_Listones.Multibeneficios} self="scale" /></a>
            <a href={RoutersLinks.blanqueamiento}><ButtonMenu imgData={Botones_Listones.Blanqueamiento} self="scale" /></a>
            <a href={RoutersLinks.saludNatural}><ButtonMenu imgData={Botones_Listones.SaludNatural} self="scale" /></a>
            <a href={RoutersLinks.cuidadoFamiliar}><ButtonMenu imgData={Botones_Listones.CuidadoFamiliar} self="scale" /></a>
            <a href={RoutersLinks.sensibilidad}><ButtonMenu imgData={Botones_Listones.Sensibilidad} self="scale" /></a>
            <a href={RoutersLinks.infantil}><ButtonMenu imgData={Botones_Listones.Infantil} self="scale" /></a>
        </div>
    );
};

export default Menu;