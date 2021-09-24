import React from 'react';
import Footer from './Footer';
import NavBar from '../Components/NavBar';
import PlantillaCabecera from './PlantillaCabecera';
import PlantillaMenuProductos from './PlantillaMenuProductos';
import PlantillaProductos from './PlantillaProductos';

const SliderProductos = ({ data }) => {
    return (
        <div>
            <div className="SliderProductos">
                <NavBar></NavBar>
                <PlantillaCabecera data={data.InformacionCabecera}></PlantillaCabecera>
                <PlantillaMenuProductos data={data.ImagenesMenuBotones}></PlantillaMenuProductos>
                <PlantillaProductos data={data.InformacionProductos}></PlantillaProductos>
            </div>
            <div>
                <Footer activate={data.footer} limite={data.InformacionProductos.length}></Footer>
            </div>
        </div>
    );
};

export default SliderProductos;