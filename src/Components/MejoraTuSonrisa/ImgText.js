import React from 'react';
import '../../css/ImgText.css';

const ImgText = ({urlImg, text}) => {
    return (
        <div className="ImgText">
            <img src={urlImg} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default ImgText;