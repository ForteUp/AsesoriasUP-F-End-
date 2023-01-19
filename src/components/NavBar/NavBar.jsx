import React from 'react';
import "./NavBar.scss";
import ImgProfile from "../../assets/VectorProfile.svg";

function NavBar() {
  return (
    <nav className='NavBar-body'>
        <div className='NavBar-Menu'>
            <div className='opcionAgendar'>
                <p className='opcionAgendar-text'>Agendar</p>
            </div>
            <div className='opcionRegistrar'>
                <p className='opcionRegistrar-text'>Registrar</p>
            </div>
            <div className='opcionMisEventos'>
                <p className='opcionMisEventos-text'>Mis Eventos</p>
            </div>
            <div className='opcionProfile'>
                <img src={ImgProfile}  className='opcionProfile-text'/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar