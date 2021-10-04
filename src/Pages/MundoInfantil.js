import React from 'react';
import NavBar from '../Components/Home/NavBar';
import Video from '../Components/Video';
import urlVideo2 from '../img/Video/VideoInfantil.mp4'

const MundoInfantil = () => {

    return (
        <div>
            <NavBar />
            <Video
                urlVideo={urlVideo2}
                widthVideo={window.screen.width}
                heightVideo={window.screen.height}
                autoPlayVideo={true}
            />
        </div>
    );
};

export default MundoInfantil;