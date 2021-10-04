import React from 'react';
import ButtonHome from './ButtonHome';

const Results = ({ scoreResults, titleResults, mensaje, mensajeB }) => {
    return (
        <div>
            <div className="valueScore">
                <h1>{`${scoreResults}/5`}</h1>
                <h1>Correctas</h1>
            </div>
            <h3 className="titleScore">{titleResults}</h3>
            <p className="mensaje">{mensaje} <br /> <b>{mensajeB}</b></p>
            <ButtonHome />
        </div>
    );
};

export default Results;