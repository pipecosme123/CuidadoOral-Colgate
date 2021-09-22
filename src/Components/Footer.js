import React, { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Footer.css';

const Footer = ({ limite, activate }) => {

  // let rightScroll = 1;
  
  const rest = window.screen.width;
  const limit = limite * rest;
  let [positionScroll, setPositionScroll] = useState(0);
  const [btnRetroceder,setBtnRetroceder] = useState("disable");
  const [btnAvanzar,setBtnAvanzar] = useState("btn");

  const Retroceder = () => {

    let positionX = ((window.scrollX / rest).toFixed() - 1) * rest;
    console.log(positionX, (window.scrollX / rest).toFixed() , "Retroceder")

    window.scroll({
      left: positionX,
      behavior: 'smooth'
    });

    if (positionScroll < 3840) {
      setPositionScroll(0);
      setBtnRetroceder("disable");
    } else {
      setPositionScroll(positionX);
      setBtnRetroceder("btn");
      setBtnAvanzar("btn");
    }
  }

  const Avanzar = () => {

    let positionX = (window.scrollX / rest + 1).toFixed() * rest;
    console.log(positionX, (window.scrollX / rest).toFixed() * rest , "Avanzar" ,limit)

    window.scroll({
      left: positionX,
      behavior: 'smooth'
    });

    if (positionScroll === limit) {
      setPositionScroll(positionScroll);
      setBtnAvanzar("disable");
    } else {
      setPositionScroll(positionX);
      setBtnRetroceder("btn");
      setBtnAvanzar("btn");
    }

  }

  return (
    <div className="Footer">
      <div className={`footerBotones ${btnRetroceder}`}>
        <div className="flechas">
          <button onClick={() => Retroceder()}>
            <HiChevronDoubleLeft />
          </button>
          <p>Retroceder</p>
        </div>
      </div>

      <div className="footerMenu">
        <a href={RoutersLinks.multibeneficios} className={activate === "Multibeneficios" ? `menuOpciones activate` : `menuOpciones noActivate`}> {/* ${activate[0]}*/}
          <img src={Botones_Listones.Multibeneficios.btn} alt="" />
          <p>Multibeneficios</p>
        </a>
        <a href={RoutersLinks.blanqueamiento} className={activate === "Blanqueamiento" ? `menuOpciones activate` : `menuOpciones noActivate`}> {/* ${activate[1]}*/}
          <img src={Botones_Listones.Blanqueamiento.btn} alt="" />
          <p>Blanqueamiento</p>
        </a>
        <a href={RoutersLinks.saludNatural} className={activate === "Natural" ? `menuOpciones activate` : `menuOpciones noActivate`}> {/* ${activate[2]}*/}
          <img src={Botones_Listones.SaludNatural.btn} alt="" />
          <p>Salud Natural</p>
        </a>
        <a href={RoutersLinks.cuidadoFamiliar} className={activate === "Familiar" ? `menuOpciones activate` : `menuOpciones noActivate`}> {/* ${activate[3]}*/}
          <img src={Botones_Listones.CuidadoFamiliar.btn} alt="" />
          <p>Cuidado Familiar</p>
        </a>
        <a href={RoutersLinks.sensibilidad} className={activate === "Sensibilidad" ? `menuOpciones activate` : `menuOpciones noActivate`}> {/* ${activate[4]}*/}
          <img src={Botones_Listones.Sensibilidad.btn} alt="" />
          <p>Sensibilidad</p>
        </a>
        <a href={RoutersLinks.infantil} className={activate === "Infantil" ? `menuOpciones activate` : `menuOpciones noActivate`}> {/* ${activate[5]}*/}
          <img src={Botones_Listones.Infantil.btn} alt="" />
          <p>Cuidado de los mas pequeños</p>
        </a>
      </div>

      <div className={`footerBotones ${btnAvanzar}`}>
        <div className="flechas">
          <button onClick={() => Avanzar()}>
            <HiChevronDoubleRight />
          </button>
          <p>Avanzar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;