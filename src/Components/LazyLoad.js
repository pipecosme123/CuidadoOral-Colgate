import React from 'react';
import { Home } from '../Constants/Images';
import '../css/LazyLoad.css';

const LazyLoad = () => {
    return (
        <div className="LazyLoad animate">
            <img src={Home.LogoColgateLazyLoad} alt="" />
        </div>
    );
};

export default LazyLoad;