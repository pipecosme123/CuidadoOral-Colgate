import React from 'react';
import Footer from './Footer';
import NavBar from '../Home/NavBar';
import PlantillaCabecera from './PlantillaCabecera';
import PlantillaMenuProductos from './PlantillaMenuProductos';
import PlantillaProductos from './PlantillaProductos';

const SliderProductos = ({ data }) => {
    return (
        <div>
            <div className="SliderProductos">
                <NavBar></NavBar>
                <PlantillaCabecera data={data.InformacionCabecera} />
                <PlantillaMenuProductos data={data.ImagenesMenuBotones} />
                <PlantillaProductos data={data.InformacionProductos} />
            </div>
            <div>
                <Footer activate={data.footer} limite={data.InformacionProductos.length} visible={true} />
            </div>
        </div>
    );
};

export default SliderProductos;