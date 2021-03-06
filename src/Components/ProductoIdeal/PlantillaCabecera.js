import React from 'react';
import { ImgHome } from '../../Constants/Images';
import '../../css/PlantillaProductos.css';

const PlantillaCabecera = ({ data }) => {

  const scrollWindow = () => {
    window.scroll({
      left: window.screen.width,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className="pProductos">
        <div className="plantillaProductos">
          <div className="imgProduvto">
            <img src={data.img} alt="" />
          </div>
          <div className="informacionProducto">
            <div className="secTitulo">
              <h3>{data.tituloSuperior}</h3>
              <h1>{data.nombre}</h1>
              <h3 className={data.subTitulo === "" ? "noVisible" : "subTitulo"}>{data.subTitulo}</h3>
            </div>
            <p className={data.informacion !== "" ? "informacion" : "noVisible"}>{data.informacion}</p>
            <h3 className={data.tituloSec !== "" ? "tituloSec" : "noVisible"}>{data.tituloSec.toUpperCase()}</h3>
            <div className="seccionBeneficios">
              <ul>
                {data.beneficios.map((bene, index) => (
                  <li key={index}>
                    <p>{bene.beneficio}</p>
                  </li>
                ))}
              </ul>
            </div>
            <span>{data.extra}</span>
            <button className="barraBeneficios" onClick={() => scrollWindow()}>Conoce los productos con estos beneficios <img src={ImgHome.bottonBeneficios} alt="" /></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlantillaCabecera;