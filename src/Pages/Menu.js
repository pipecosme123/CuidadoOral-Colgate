import React from 'react';
import ButtonMenu from '../Components/ButtonMenu';
import { Botones_Listones } from '../Constants/Images';
import '../css/Menu.css';

const Menu = () => {
    return (
        <div className="menuProductoIdeal">
            <ButtonMenu imgData={Botones_Listones.Blanqueamiento} self="scale" />
            <ButtonMenu imgData={Botones_Listones.Familiar} self="scale" />
            <ButtonMenu imgData={Botones_Listones.Infantil} self="scale" />
            <ButtonMenu imgData={Botones_Listones.Natural} self="scale" />
            <ButtonMenu imgData={Botones_Listones.Total} self="scale" />
            <ButtonMenu imgData={Botones_Listones.Sensibilidad} self="scale" />
        </div>
    );
};

export default Menu;