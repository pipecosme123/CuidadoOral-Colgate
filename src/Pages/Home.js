import React, { useEffect } from 'react';
import ButtonMenu from '../Components/ProductoIdeal/ButtonMenu';
import Slider from '../Components/Home/Slider';
import { ImgHome, Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Home.css';
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0
    });
    // console.log(window.location.hash === `#${RoutersLinks.home}`);
    // const noScroll = () => {
    //   window.scrollTo(window.scrollX, 0);
    //   // console.log(window.location.hash);
    // }

    // setTimeout(() => {
    //   window.addEventListener('scroll', noScroll);
    // }, 500)

  }, [])

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
        <img className="imgLogoColgate" src={ImgHome.LogoColgate} alt="LogoColgate" />
        <div className="slider">
          <Slider />
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
          {/* <HashRouter> */}
          <Link to={RoutersLinks.menu}><ButtonMenu imgData={Botones_Listones.ProductoIdeal} self="scale2" /></Link>
          <Link to={RoutersLinks.mejoraTuSonrisa}><ButtonMenu imgData={Botones_Listones.MejoraTuSonrisa} self="scale2" /></Link>
          <Link to={RoutersLinks.mundoInfantil}><ButtonMenu imgData={Botones_Listones.seccionInfantil} self="scale2" /></Link>
          <Link to={RoutersLinks.quiz}><ButtonMenu imgData={Botones_Listones.Quiz} self="scale2" /></Link>
          {/* </HashRouter> */}

        </div>
      </div>
    </div>
  );
};

export default Home;