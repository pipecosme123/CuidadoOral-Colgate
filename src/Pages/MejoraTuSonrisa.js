import React from 'react';
import NavBar from '../Components/Home/NavBar';
import ImgText from '../Components/MejoraTuSonrisa/ImgText';
import Footer from '../Components/ProductoIdeal/Footer';
import { btnConsejos, consejos } from '../Constants/Images';
import '../css/MejoraTuSonrisa.css';

const MejoraTuSonrisa = () => {
  return (
    <div className="MejoraTuSonrisa">
      <NavBar></NavBar>
      <div className="seccionesMTS">
        <div className="seccionMTS bMenu">
          <h1 className="titleMenu">CONSEJOS PARA UNA MEJOR SONRISA</h1>
          <div className="buttonsMenu">
            {btnConsejos.map((btn, index) => (
              <div key={index} className="btnImage">
                <img src={btn.btnConsejo} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="seccionMTS consejo1">
          <div className="title">
            <h1>CEPILLA TUS DIENTES</h1>
            <p>Una boca sana comienza con un <i>correcto cepillado</i></p>
          </div>
          <img src={consejos.Consejos_1_01} alt="" />
          <div className="horaCepillado">
          <ImgText urlImg={consejos.Consejos_1_02} text="En la mañana" />
          <ImgText urlImg={consejos.Consejos_1_03} text="En la tarde" />
          <ImgText urlImg={consejos.Consejos_1_04} text="En la noche" />
          </div>
        </div>

      </div>

      < Footer limite={btnConsejos.length} visible={false} />
    </div>
  );
};

export default MejoraTuSonrisa;