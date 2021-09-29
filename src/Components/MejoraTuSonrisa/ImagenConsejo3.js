import React from 'react';
import { consejos } from '../../Constants/Images';
import ImgText from './ImgText';

const ImagenConsejo3 = () => {
    return (
        <div className="ImagenConsejo3">
            <div>
                <h2>Frescura</h2>
                <ImgText urlImg={consejos.Consejos_3_01} text="Plax Soft Mint" />
            </div>
            <div>
                <h2>Blanqueamiento</h2>
                <ImgText urlImg={consejos.Consejos_3_02} text="Luminous White" />
            </div>
            <div>
                <h2>Especializado</h2>
                <ImgText urlImg={consejos.Consejos_3_03} text="Sensitive Pro-Alivio" />
            </div>
        </div>
    );
};

export default ImagenConsejo3;