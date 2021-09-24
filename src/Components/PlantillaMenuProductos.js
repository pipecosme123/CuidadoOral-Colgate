import React from 'react';
// import '../css/PlantillaMenuProductos.scss';
import '../css/PlantillaMenuProductos.css';

const PlantillaMenuProductos = ({ data }) => {

  const scrollToProduct = (id) => {

    let positionX = window.screen.width * id;
    window.scroll({
      left: positionX,
      behavior: 'smooth'
    });
  }

  return (
    <div className="menuCircular">

      <div className={`container l${data.length}`}>
        <div className="text">
          <h3>TOCA PARA ELEGIR</h3>
          <h1>UNA OPCIÓN</h1>
        </div>
        {data.map((img, index) => (
          <div key={index} className={`mcImg animate`} onClick={() => scrollToProduct(index + 2)}>
            <img src={img.btn} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantillaMenuProductos;