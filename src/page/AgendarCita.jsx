import React from "react";
import "./AgendarCita.scss";
import Profiles from "../components/AgendarCitaPage/Profiles";

function AgendarCita(){
    return(
        <div className="AgendarCita-page">
            <div className="Agendar-container">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <h2 className="AgendarProfile">Selecciona con quién vas a tener la asesoría</h2>
                <Profiles/>
            </div>
        </div>
    )
};

export default AgendarCita;
