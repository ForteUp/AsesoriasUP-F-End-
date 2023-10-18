import React from 'react';
import "./NavBar.scss";
import ImgProfile from "../../assets/VectorProfile.svg";
import ImgLogo from "../../assets/roble-removebg-preview 1roble.png";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className='NavBar-body'>
        <div className='NavBar-Logo' itemType='button'>
            <img src={ImgLogo} className="NavBar-Img" alt=''/>
            <p className='Text'>Asesorias Universitarias</p>
        </div>
        <div className='NavBar-Menu'>
            <Link to="/agendar" className='opcionAgendar' inputMode=''>
                <p className='opcionAgendar-text'>Agendar</p>
            </Link>
            <Link to="/citas"className='opcionVerCitas'>
                <p className='opcionVerCitas-text'>Ver Citas</p>
            </Link>
            <div className='opcionMisEventos'>
                <p className='opcionMisEventos-text'>Mis Eventos</p>
            </div>
            <div className='opcionProfile'>
                <div className='opcionProfile-account'>
                    <img src={ImgProfile}  className='opcionProfile-img' alt=''/>
                </div>
            </div>
        </div>
        <label htmlFor="check" className='checkbtn'>
            <input
                type="checkbox"
                id="check"
            />
            <span className='AsesoriasRegistrar'>Asesorias por Registrar</span>
        </label>
    </nav>
  )
}

export default NavBar