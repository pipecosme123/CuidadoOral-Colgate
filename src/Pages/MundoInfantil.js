import React, { useEffect } from 'react';
import NavBar from '../Components/Home/NavBar';
import Video from '../Components/Video';
import urlVideo2 from '../img/Video/VideoInfantil.mp4'

const MundoInfantil = () => {

    useEffect(() => {
        window.scroll({
            top: window.screen.width,
            left: 0
        });

        const noScroll = () => {
            window.scrollTo(window.scrollX, window.screen.width);
            // console.log(window.location.hash);
        }

        setTimeout(() => {
            window.addEventListener('scroll', noScroll);
        }, 500)

    }, [])

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