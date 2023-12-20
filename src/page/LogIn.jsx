import React, {useContext, useState} from "react";
import InputField from "../components/Global/InputField";
import "./LogIn.scss";
import Tree from "../assets/tree.png";
import Button from "../components/Global/Button";
import {server_url} from "../../main.js";
import AuthContext from "../Context/AuthContext.jsx";

function LogIn() {
    const [expandForm, setExpandForm] = useState(false);
    const handleEmailInputFocus = () => {
        setExpandForm(true);
      };
    
      const handleEmailInputBlur = () => {
        setExpandForm(false);
      };
    let {loginUser} = useContext(AuthContext)
    let {user} = useContext(AuthContext)
    
    console.log(user)
    return (
        <div className={`login-page ${expandForm ? 'expanded' : ''}`}>
            <form
                className="login-form"
                onSubmit={loginUser}
                onFocus={handleEmailInputFocus}
                onBlur={handleEmailInputBlur}
            >   
            {/*<form className="login-form">*/}
            <h1 className="login-title">ASESORÍAS Universitarias UP</h1>
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
            />
            <InputField
                className="login-pwd"
                textDisplay="Contraseña"
                type="password"
                placeholder=""
                // value="84079866"
            />
            <Button 
                className="login-button"
                type="submit"
                buttonContent="Ingresar"
            />
            </form>         
            <div className="login-container">
                <img src={Tree} alt="tree" />
            </div>
        </div>
    );
}

export default LogIn;
