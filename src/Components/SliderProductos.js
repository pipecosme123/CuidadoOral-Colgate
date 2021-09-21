import React from 'react';
import Footer from './Footer';
import PlantillaCabecera from './PlantillaCabecera';
import PlantillaProductos from './PlantillaProductos';

const SliderProductos = ({data}) => {
    return (
        <div>
            <div className="SliderProductos">
            <PlantillaCabecera data={data.InformacionCabecera}></PlantillaCabecera>
            <PlantillaProductos data={data.InformacionProductos}></PlantillaProductos>
        </div>
        <div>
        <Footer limite={data.InformacionProductos.length}></Footer>
      </div>
        </div>
    );
};

export default SliderProductos;