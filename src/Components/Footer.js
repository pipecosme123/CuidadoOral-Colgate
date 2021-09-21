import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { Botones_Listones } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Footer.css';

const Footer = ({ limite, activate }) => {

  let rightScroll = 1;

  const Retroceder = () => {
    let rest = rightScroll - 2;

    window.scroll({
      left: window.screen.width * rest,
      behavior: 'smooth'
    });

    if (rightScroll === 1) {
      rightScroll = 1;
    } else {
      rightScroll = rightScroll - 1;
    }

  }

  const Avanzar = () => {
    window.scroll({
      left: window.screen.width * rightScroll,
      behavior: 'smooth'
    });

    if (rightScroll === limite) {
      rightScroll = limite;
    } else {
      rightScroll = rightScroll + 1;
    }

  }

  return (
    <div className="Footer">
      <div className="footerBotones">
        <div className="flechas">
          <button onClick={() => Retroceder()}>
            <HiChevronDoubleLeft />
          </button>
          <p>Retroceder</p>
        </div>
        {/* <div className="flechas">
                    <button>
                        <HiChevronDoubleRight />
                    </button>
                    <p>Avanzar</p>
                </div> */}
      </div>

      <div className="footerMenu">
        <a href={RoutersLinks.multibeneficios} className={`menuOpciones `}> {/* ${activate[0]}*/}
          <img src={Botones_Listones.Multibeneficios.btn} alt="" />
          <p>Multibeneficios</p>
        </a>
        <a href={RoutersLinks.blanqueamiento} className={`menuOpciones `}> {/* ${activate[1]}*/}
          <img src={Botones_Listones.Blanqueamiento.btn} alt="" />
          <p>Blanqueamiento</p>
        </a>
        <a href={RoutersLinks.saludNatural} className={`menuOpciones `}> {/* ${activate[2]}*/}
          <img src={Botones_Listones.SaludNatural.btn} alt="" />
          <p>Salud Natural</p>
        </a>
        <a href={RoutersLinks.cuidadoFamiliar} className={`menuOpciones `}> {/* ${activate[3]}*/}
          <img src={Botones_Listones.CuidadoFamiliar.btn} alt="" />
          <p>Cuidado Familiar</p>
        </a>
        <a href={RoutersLinks.sensibilidad} className={`menuOpciones `}> {/* ${activate[4]}*/}
          <img src={Botones_Listones.Sensibilidad.btn} alt="" />
          <p>Sensibilidad</p>
        </a>
        <a href={RoutersLinks.infantil} className={`menuOpciones `}> {/* ${activate[5]}*/}
          <img src={Botones_Listones.Infantil.btn} alt="" />
          <p>Cuidado de los mas pequeños</p>
        </a>
      </div>

      <div className="footerBotones">
        {/* <div className="flechas">
                    <button>
                        <HiChevronDoubleLeft />
                    </button>
                    <p>Retroceder</p>
                </div> */}
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