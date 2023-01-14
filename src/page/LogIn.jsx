import React from "react";
import InputField from "../components/Global/InputField";
import "./LogIn.scss";
import Tree from "../assets/tree.png";

function LogIn() {
    return (
        <div className="login-page">
            <form className="login-form">
                <h1 className="login-title">ASESORÍAS UNIVERSITARIAS UP</h1>
                <h2 className="login-subtitle">Inicia Sesión</h2>
                <p className="login-text">
                    Ingresa con tu correo institucional de la Universidad
                    Panamericana
                </p>
                <InputField
                    className="login-mail"
                    textDisplay="Correo Institucional"
                    type="mail"
                    placeholder=""
                    value="temporal@up.edu.mx"
                />
                <InputField
                    className="login-pwd"
                    textDisplay="Contraseña"
                    type="password"
                    placeholder=""
                    value="temporal"
                />
                
                <button className="login-button" type="submit">
                    Ingresar Temporal
                </button>
            </form>
            <div className="login-container">
                <img src={Tree} alt="tree" />
            </div>
        </div>
    );
}

export default LogIn;
