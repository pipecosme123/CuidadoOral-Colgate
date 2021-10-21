import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import { RoutersLinks } from '../Constants/RoutersLinks';

const IdleTimerComponent = () => {

    const idleTimerRef = useRef(null);

    const onIdle = () => {

        if (window.location.hash !== "#/MundoInfantil") {
            window.location.href = RoutersLinks.home;
        } 
    }

    return (
        <div>
            <IdleTimer
                ref={idleTimerRef}
                timeout={1000 * 30}
                onIdle={onIdle}
            />
        </div>
    );
};

export default IdleTimerComponent;