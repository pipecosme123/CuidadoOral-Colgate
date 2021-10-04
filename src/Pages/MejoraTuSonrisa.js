import React from 'react';
import NavBar from '../Components/Home/NavBar';
import ImagenConsejo3 from '../Components/MejoraTuSonrisa/ImagenConsejo3';
import ImgText from '../Components/MejoraTuSonrisa/ImgText';
import Footer from '../Components/ProductoIdeal/Footer';
import Video from '../Components/Video';
import urlVideo1 from '../img/Video/ConsejosCepillado.mp4';
import { Consejos_5 } from '../Constants/Consejos';
import { btnConsejos, consejos } from '../Constants/Images';
import '../css/MejoraTuSonrisa.css';

const MejoraTuSonrisa = () => {

  // const [reproducir, setReproducir] = useState(false);

  const scrollToProduct = (id) => {

    let positionX = window.screen.width * id;
    window.scroll({
      left: positionX,
      behavior: 'smooth'
    });
  }

  // useEffect(() => {
  //   window.onscroll = function () {
  //     var y = window.scrollX;
  //     console.log(y);

  //     if(y >= 1900){
  //       // console.log(true);
  //       setReproducir(true);
  //     }
  //     // document.getElementById('y').innerText = y;
  //   };
  // });

  return (
    <div className="MejoraTuSonrisa">
      <NavBar></NavBar>
      <div className="seccionesMTS">
        <div className="seccionMTS bMenu">
          <h1 className="titleMenu">CONSEJOS PARA UNA MEJOR SONRISA</h1>
          <div className="buttonsMenu">
            {btnConsejos.map((btn, index) => (
              <div key={index} className="btnImage" onClick={() => scrollToProduct(index + 1)}>
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

          <div className="seccion1">
            <div className="seccion1C1">
              <img className="imgConsejo1" src={consejos.Consejos_1_01} alt="" />
              <div className="horaCepillado">
                <ImgText orientation="vertical" urlImg={consejos.Consejos_1_02} text="En la mañana" />
                <ImgText orientation="vertical" urlImg={consejos.Consejos_1_03} text="En la tarde" />
                <ImgText orientation="vertical" urlImg={consejos.Consejos_1_04} text="En la noche" />
              </div>
              <div className="text">
                <p>Cepillando tus dientes 3 veces al día durante 2 minutos lograrás controlar la placa bacteriana y mantener una sonrisa sana</p>
              </div>
            </div>
            <div>
              <Video urlVideo={urlVideo1} widthVideo={720} heightVideo={405} autoPlayVideo={false} />
            </div>
          </div>
        </div>

        <div className="seccionMTS consejo2">
          <div className="title">
            <h1>VISITA AL DENTISTA</h1>
          </div>

          <div className="seccionC2">
            <div className="imgSeccion2">
              <img src={consejos.Consejos_2_01} alt="" />
            </div>

            <div className="textSeccion2">
              <h1>INFORMACIÓN GENERAL</h1>
              <p>Cuidarse los dientes significa más que cepillarse y usar hilo dental. Para cuidarse de forma completa es importante visitar al dentista cada seis meses para realizarse chequeos y limpiezas profesionales. El primer paso del proceso es encontrar un dentista con quien se sienta cómodo, y luego concertar una cita.</p>

              <h1>¿QUÉ ESPERAR DE LA VISITA AL DENTISTA?</h1>
              <p>Durante su primera visita al dentista, este establecerá el historial completo de su salud. En las visitas de seguimiento, si su estado de salud ha cambiado, no se olvide de comentárselo al dentista.</p>
            </div>
          </div>

        </div>

        <div className="seccionMTS consejo3">
          <div className="title">
            <h1>USA ENJUAGUE BUCAL</h1>
          </div>
          <div className="seccionConsejo3">
            <div className="imgSeccion3">
              <ImagenConsejo3 />
            </div>
            <div className="textSeccion3">
              <p><b>*</b> Enjuaga tus dientes durante 1 minuto con tu enjuague de elección para completar tu higiene bucal.</p>
              <p><b>*</b> Usando tu enjuague bucal preferido durante un minuto luego del cepillado lograras un complemento perfecto para el cuidado de tu sonrisa.</p>
            </div>
          </div>
        </div>

        <div className="seccionMTS consejo4">
          <div className="title">
            <h1>CAMBIA TU CEPILLO DE DIENTES</h1>
          </div>

          <div className="seccionConsejo4">
            <div className="textSeccion4">
              <p>Cambia tu cepillo cuando sus filamentos estén deformados, de esta manera lograras un mejor control de la placa bacteriana y al mismo tiempo evitaras la contaminación de tu cepillo por uso prolongado en el tiempo.</p>
            </div>
            <div className="imgSeccion4">
              <img className="imgCepillo" src={consejos.Consejos_4_01} alt="" />
              <img className="imgFlecha" src={consejos.Consejos_4_02} alt="" />
            </div>
            <div className="textSeccion4">
              <p>Estudios han demostrado que después de 3 meses de uso regular, un cepillo es menos efectivo para remover la placa de los dientes y de las encías, en comparación con un cepillo nuevo.</p>
            </div>
          </div>
        </div>

        <div className="seccionMTS consejo5">
          <div className="title">
            <h1>CONSEJOS PARA UNA BOCA SANA</h1>
          </div>

          <div className="seccion5">
            <div className="consejos1">
              <ImgText orientation="horizontal parte1" urlImg={Consejos_5.Consejo_5_1.img} text={Consejos_5.Consejo_5_1.consejo} />
              <ImgText orientation="horizontal parte1" urlImg={Consejos_5.Consejo_5_2.img} text={Consejos_5.Consejo_5_2.consejo} />
            </div>
            <div className="consejos1">
              <ImgText orientation="horizontal parte1" urlImg={Consejos_5.Consejo_5_3.img} text={Consejos_5.Consejo_5_3.consejo} />
              <ImgText orientation="horizontal parte1" urlImg={Consejos_5.Consejo_5_4.img} text={Consejos_5.Consejo_5_4.consejo} />
            </div>
          </div>

          <div className="seccion5 parte2">
            <ImgText orientation="horizontal parte2" urlImg={Consejos_5.Consejo_5_5.img} text={Consejos_5.Consejo_5_5.consejo} />
            <ImgText orientation="horizontal parte2" urlImg={Consejos_5.Consejo_5_6.img} text={Consejos_5.Consejo_5_6.consejo} />
            <ImgText orientation="horizontal parte2" urlImg={Consejos_5.Consejo_5_7.img} text={Consejos_5.Consejo_5_7.consejo} />
          </div>
        </div>

      </div>

      < Footer limite={btnConsejos.length} visible={false} />
    </div>
  );
};

export default MejoraTuSonrisa;