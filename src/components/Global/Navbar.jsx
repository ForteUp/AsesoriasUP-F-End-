import React from "react";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <a>
                    <img src="" alt="tree" />
                    Asesorías Universitarias
                </a>
            </div>
            <div className="navbar-right">
                <div>
                    <a>Agendar</a>
                </div>
                <div>
                    <a>Registrar</a>
                </div>
                <div>
                    <a>Mis Eventos</a>
                </div>
                <div>
                    <i className="material-icons">person</i>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
