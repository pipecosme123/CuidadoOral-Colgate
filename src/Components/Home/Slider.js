import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';         // Importar los componentes de Swiper React
// import "swiper/css/effect-coverflow"
import 'swiper/swiper.scss';   // Importar los estilos 'Swiper'
import 'swiper/components/navigation/navigation.scss'; // Importar el CSS de los botones de navegacion
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';   // import Swiper core and required modules
import { Sliders } from '../../Constants/Images';
// import { render } from '@testing-library/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]);      // install Swiper modules


const Slider = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                speed={900}
                spaceBetween={50}
                slidesPerView={3}
                className="mySwiper"
                loop={true}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": true
                }}
                coverflowEffect={{
                    "rotate": 0,
                    "stretch": 0,
                    "depth": 0,
                    "modifier": 1,
                    "slideShadows": false
                  }}
            >
                {Sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <img src={slider.slider} alt="" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Slider;