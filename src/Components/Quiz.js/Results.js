import React, { useEffect, useRef } from 'react';
import ButtonHome from './ButtonHome';
import lottie from 'lottie-web';

const Results = ({ scoreResults, titleResults, mensaje, mensajeB, lottieJson }) => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieJson // the path to the animation json ../img/Animacion2.json  ----------- d6d6d6
        });
    })

    return (
        <div>
            <div className="infoResult">
                <div className="valueScore">
                    <h1>{`${scoreResults}/5`}</h1>
                    <h1>Correctas</h1>
                </div>
                <h3 className="titleScore">{titleResults}</h3>
                <p className="mensaje">{mensaje} <br /> <b>{mensajeB}</b></p>
                <ButtonHome />
            </div>
            <div className="container_svg_lottie" ref={container}></div>
        </div>
    );
};

export default Results;