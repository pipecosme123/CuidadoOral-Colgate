import React from 'react';
import VideoPlayer from 'react-video-js-player';
import { RoutersLinks } from '../Constants/RoutersLinks';


const Video = ({ urlVideo, widthVideo, heightVideo, autoPlayVideo }) => {

    return (
        <div>
            <VideoPlayer
                controls={true}
                src={urlVideo}
                width={widthVideo}
                height={heightVideo}
                autoplay={autoPlayVideo}
                hideControls={['volume','seekbar','timer','playbackrates','fullscreen']}
                onEnd={() => window.location.href = RoutersLinks.home}
            >
            </VideoPlayer>
        </div>
    );
};

export default Video;