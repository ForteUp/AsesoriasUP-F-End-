import React from "react";
import "./AgendarCita.scss";
import Lista_Alumnos from "../components/AgendarCitaPage/Lista_Alumnos.jsx";
import BotonSiguiente from "../components/AgendarCitaPage/BotonNext/BotonSiguiente";
import NavBar from "../components/NavBar/NavBar";

function AgendarCita(){
    return(
        <div className="AgendarCita-page">
            <NavBar/>
            <div className="Agendar-container">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <h2 className="AgendarProfile">Selecciona con quién vas a tener la asesoría</h2>
                <Lista_Alumnos/>
                <BotonSiguiente/>
            </div>
        </div>
    )
};

export default AgendarCita;
