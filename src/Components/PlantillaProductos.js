import React from 'react';
import '../css/PlantillaProductos.css';
import Menu from '../Pages/Menu';

const PlantillaProductos = ({ data }) => {
    return (
        <div>
            <div className="pProductos">
                {data.InformacionProductos.map((prod, index) => (
                    <div key={index} className="plantillaProductos">
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
                            <p className="informacion">{prod.informacion}</p>
                            <h3 className="tituloSec">{prod.tituloSec.toUpperCase()}</h3>
                            <div className="seccionBeneficios">
                                <ul>
                                    {prod.beneficios.map((bene, index) => (
                                        <li key={index}>
                                            <p>{bene.beneficio}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <span>{prod.extra}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pMenu">
                <Menu></Menu>
            </div>
        </div>
    );
};

export default PlantillaProductos;