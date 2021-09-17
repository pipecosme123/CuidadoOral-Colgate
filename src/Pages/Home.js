import React from 'react';
import ButtonMenu from '../Components/ButtonMenu';
import { Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Home.css';

const Home = () => {

  const clickButton = () => {
    window.scroll({
      left: window.screen.width,
      behavior: 'smooth'
    });
  }


  return (
    <div className="pHome">
      <div className="Home">
        <div className="separador"></div>
        <div className="slider">
          <p>SLIDER</p>
        </div>
        <h1>Hola!</h1>
        <h3>¿Quieres saber más sobre <b>cuidado Oral</b>?</h3>
        <button className="animate" onClick={() => clickButton()}>Oprime aquí</button>
      </div>
      <div className="pMenu">
        <div className="titleMenu">
          <h1>TOCA</h1>
          <h3>PARA ELEGIR UNA</h3>
          <h1 className="op">OPCIÓN</h1>
        </div>
        <div className="ButtonsMenu" id="menu">
          <a href={RoutersLinks.menu}><ButtonMenu imgData={Botones_Listones.ProductoIdeal} self="none" /></a>
          <a href="##"><ButtonMenu imgData={Botones_Listones.MejoraTuSonrisa} self="self" /></a>
          <a href="##"><ButtonMenu imgData={Botones_Listones.seccionInfantil} self="self" /></a>
          <a href="##"><ButtonMenu imgData={Botones_Listones.Quiz} self="none" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;