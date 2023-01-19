import React from 'react';
import "./NavBar.scss";
import ImgProfile from "../../assets/VectorProfile.svg";
import ImgLogo from "../../assets/roble-removebg-preview 1roble.png";

function NavBar() {
  return (
    <nav className='NavBar-body'>
        <div className='NavBar-Logo' itemType='button'>
            <img src={ImgLogo} className="NavBar-Img"/>
            <p className='NavBar-text1'>Asesorias</p>
            <p className='NavBar-text2'>Universidad</p>
        </div>
        <div className='NavBar-Menu'>
            <div className='opcionAgendar'>
                <p className='opcionAgendar-text'>Agendar</p>
            </div>

            <div className='opcionVerCitas'>
                <p className='opcionVerCitas-text'>Ver Citas</p>
            </div>
            <div className='opcionMisEventos'>
                <p className='opcionMisEventos-text'>Mis Eventos</p>
            </div>
            <div className='opcionProfile'>
                <div className='opcionProfile-account'>
                    <img src={ImgProfile}  className='opcionProfile-img'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar