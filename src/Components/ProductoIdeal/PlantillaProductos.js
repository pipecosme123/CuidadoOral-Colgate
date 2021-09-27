import React from 'react';
import '../../css/PlantillaProductos.css';

const PlantillaProductos = ({ data }) => {

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  
  return (
    <div>
      <div className="pProductos">
        {data.map((prod, index) => (
          // <div key={index}>
          //   {productos.tipo === "imagenes" ? () => <Ejem da={productos} /> : { <PProductos prod={productos} /> }}
          // </div>

            <div key={index}>
              <div className={prod.tipo === "producto" ? "plantillaProductos" : "noVisible"} id={prod.id}>
                <div className="imgProduvto">
                  <img src={prod.img} alt="" />
                </div>
                <div className="informacionProducto">
                  <div className="secTitulo">
                    <h3>{prod.tituloSuperior}</h3>
                    <h1>{prod.nombre}</h1>
                    <h4>{prod.sufijo}</h4>
                    <h3 className="subTitulo">{prod.subTitulo}</h3>
                  </div>
                  <p className={ data.informacion !== "" ? "informacion" : "noVisible"}>{data.informacion}</p>
                  <h3 className={ data.tituloSec !== "" ? "tituloSec" : "noVisible"}>{prod.tituloSec.toUpperCase()}</h3>
                  <div className="seccionBeneficios">
                    <ul>
                      {prod.beneficios.map((bene, index) => (
                        <li key={index}>
                          <p>{capitalize(bene.beneficio)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="pExtra">{prod.extra}</span>
                </div>
              </div>
              <div>
                <div className={prod.tipo !== "producto" ? "plantillaProductos plantillaImagenes" : "noVisible"} id={prod.id}>
                  {prod.productos.map((cepillos, index) => (
                    <div key={index} className="pImagenes">
                      <img src={cepillos.img} alt="" />
                      <h3>{cepillos.tituloSuperior}</h3>
                      <h1>{cepillos.nombre}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PlantillaProductos;