import React from 'react';
import '../css/PlantillaProductos.css';

const PlantillaCabecera = ({ data }) => {
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
              <h4>{data.sufijo}</h4>
              <h3 className="subTitulo">{data.subTitulo}</h3>
            </div>
            <p className="informacion">{data.informacion}</p>
            <h3 className="tituloSec">{data.tituloSec.toUpperCase()}</h3>
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
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlantillaCabecera;