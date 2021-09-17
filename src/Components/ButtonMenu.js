import React from 'react';
import { Botones_Listones } from '../Constants/Images';
import '../css/ButtonMenu.css';

const ButtonMenu = ({imgData, self}) => {
    return (
        <div className={`ButtonMenu ${self}`}>
            <img className="fondoListon" src={Botones_Listones.FondoListon} alt="" />
            <img className="btnListon animate" src={imgData.btn} alt="" />
            <img className="nombreListon" src={imgData.liston} alt="" />
        </div>
    );
};

export default ButtonMenu;