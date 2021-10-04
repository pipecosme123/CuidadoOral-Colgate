import React from 'react';
import { MdHome } from 'react-icons/md';
import { RoutersLinks } from '../../Constants/RoutersLinks';
import '../../css/ButtonHome.css';

const ButtonHome = () => {
  return (

    <div className="ButtonHome">
      <button onClick={() => window.location.href = `${RoutersLinks.home}#menu`}>
        <MdHome />
      </button>
      <p>Inicio</p>
    </div>

  );
};

export default ButtonHome;