import React from 'react';
import '../../css/ImgText.css';

const ImgText = ({orientation, urlImg, text}) => {
    return (
        <div className={`ImgText ${orientation}`}>
            <img src={urlImg} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default ImgText;