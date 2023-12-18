import React from 'react';
import "./NavBar.scss";
import ImgProfile from "../../assets/VectorProfile.svg";
import ImgLogo from "../../assets/roble-removebg-preview 1roble.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='NavBar-body'>
        <div className='NavBar-Logo' itemType='button'>
            <img src={ImgLogo} className="img" alt=''/>
            <p className='text'>Asesorias Universitarias</p>
        </div>
        
        <div className='NavBar-Menu'>
        </div>     
    </nav>
  )
}

export default NavBar