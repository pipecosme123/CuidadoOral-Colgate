import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { RoutersLinks } from '../../Constants/RoutersLinks';
import '../../css/ButtonHome.css';

const ButtonHome = () => {
  return (

    <div className="ButtonHome">
      <Link to={`${RoutersLinks.home}#menu`}>
        <button>
          <MdHome />
        </button>
      </Link>
      <p>Inicio</p>
    </div>
  );
};

export default ButtonHome;