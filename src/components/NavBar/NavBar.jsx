import React from 'react';
import "./NavBar.scss";
import ImgProfile from "../../assets/VectorProfile.svg";
import ImgLogo from "../../assets/roble-removebg-preview 1roble.png";
import { Link } from "react-router-dom";
import ImgMenu from "../../assets/menu.svg";


function NavBar() {
  return (
    <nav className='NavBar-body'>
        <div className='NavBar-Logo' itemType='button'>
            <img src={ImgLogo} className="img" alt=''/>
            <p className='text'>Asesorias Universitarias</p>
        </div>
        <input type="checkbox" id="check" value="NavBar-Menu"/>
        <div className='NavBar-Menu'>
            <Link to="/agendar" className='opcion' inputMode=''>
                <p className='text'>Agendar</p>
            </Link>
            <Link to="/citas"className='opcion'>
                <p className='text'>Ver Citas</p>
            </Link>
            <div className='opcion'>
                <p className='text'>Mis Eventos</p>
            </div>
            
            <div className='opcion'>
                <img src={ImgProfile}  className='imgProfile' alt=''/>
            </div>
        </div>
        
        <label htmlFor="check" className='checkbtn'>
                      
            <img src={ImgMenu}  className='img' alt=''/>
            
        </label>
        
        
    </nav>
  )
}

export default NavBar