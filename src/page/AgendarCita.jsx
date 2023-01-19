import React from "react";
import "./AgendarCita.scss";
import Lista_Alumnos from "../components/AgendarCitaPage/Lista_Alumnos.jsx";
function AgendarCita(){
    return(
        <div className="AgendarCita-page">
            <div className="Agendar-container">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <h2 className="AgendarProfile">Selecciona con quién vas a tener la asesoría</h2>
                <Lista_Alumnos/>
            </div>
        </div>
    )
};

export default AgendarCita;
