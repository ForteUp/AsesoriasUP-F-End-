import React from "react";
import "./NavBar.scss";
import ImgProfile from "../../assets/VectorProfile.svg";
import ImgLogo from "../../assets/roble-removebg-preview 1roble.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <img src={ImgLogo} className="navbar-img" />
                <p className="navbar-title">Asesorias Universitarias</p>
                <img/>
                <img/>
            </div>
            <div className="navbar-menu">
                <Link to="/agendar" className="navbar-link" inputMode="">
                    <a className="navbar-link-text">Agendar</a>
                </Link>
                <Link to="/citas" className="navbar-link">
                    <a className="navbar-link-text">Ver Citas</a>
                </Link>
                <Link to="/eventos" className="navbar-link">
                    <a className="navbar-link-text">Mis Eventos</a>
                </Link>
                <Link to="#" className="navbar-link">
                    <img alt="icon" src={ImgProfile} className="navbar-link-image" />
                </Link>
                <a className="navbar-text">Asesorias Universitarias</a>
            </div>
        </nav>
    );
}

export default NavBar;
