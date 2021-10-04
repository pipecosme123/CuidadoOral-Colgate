import React from 'react';
import ButtonMenu from '../Components/ProductoIdeal/ButtonMenu';
import NavBar from '../Components/Home/NavBar';
import { Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Menu.css';

const Menu = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="menuProductoIdeal">
                <a href={RoutersLinks.multibeneficios}><ButtonMenu imgData={Botones_Listones.Multibeneficios} self="self scale" /></a>
                <a href={RoutersLinks.blanqueamiento}><ButtonMenu imgData={Botones_Listones.Blanqueamiento} self="self scale" /></a>
                <a href={RoutersLinks.saludNatural}><ButtonMenu imgData={Botones_Listones.SaludNatural} self="self scale" /></a>
                <a href={RoutersLinks.cuidadoFamiliar}><ButtonMenu imgData={Botones_Listones.CuidadoFamiliar} self="self scale" /></a>
                <a href={RoutersLinks.sensibilidad}><ButtonMenu imgData={Botones_Listones.Sensibilidad} self="self scale" /></a>
                <a href={RoutersLinks.infantil}><ButtonMenu imgData={Botones_Listones.Infantil} self="self scale" /></a>
            </div>
        </div>
    );
};

export default Menu;