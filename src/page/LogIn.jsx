import React from "react";
import "./LogIn.scss";
import Tree from "../assets/tree.png";

function LogIn() {
    return (
        <div className="login-page">
            <form className="login-form">
                <h1>ASESORÍAS UNIVERSITARIAS UP</h1>
                <h2>Inicia Sesión</h2>
                <p>Ingresa con tu correo institucional de la Universidad Panamericana</p>
                <input
                        type="mail"
                        placeholder="Correo container temporal"
                        name="email"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña container temporal"
                        name="pwd"
                        required
                    />
                    <button className="login-button" type="submit">Ingresar Temporal</button>
            </form>
            <div className="login-container">
                <img src={Tree} alt="tree" />
            </div>
        </div>
    );
}

export default LogIn;
