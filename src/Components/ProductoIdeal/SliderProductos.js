import React, { useEffect } from 'react';
import Footer from './Footer';
import NavBar from '../Home/NavBar';
import PlantillaCabecera from './PlantillaCabecera';
import PlantillaMenuProductos from './PlantillaMenuProductos';
import PlantillaProductos from './PlantillaProductos';

const SliderProductos = ({ data }) => {

    useEffect(() => {
        window.scroll({
            top: window.screen.width,
            left: 0
        });

        const noScroll = () => {
            window.scrollTo(window.scrollX, window.screen.width);
            // console.log(window.location.pathname);
        }

        setTimeout(() => {
            window.addEventListener('scroll', noScroll);
        }, 500)

    }, [])

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