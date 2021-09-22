import React from 'react';
// import '../css/PlantillaMenuProductos.scss';
import '../css/PlantillaMenuProductos.css';

const PlantillaMenuProductos = ({ data }) => {
  return (
    <div className="menuCircular">

      <div className={`container l${data.length}`}>
        <div className="text">
          <h3>TOCA PARA ELEGIR</h3>
          <h1>UNA OPCIÓN</h1>
        </div>
        {data.map((img, index) => (
          <div key={index} className={`mcImg animate`}>
            <a href={`#${index + 1}`}>
              <img src={img.btn} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantillaMenuProductos;