import React from "react";
import "./VerCitas.scss";
import Lista_Alumnos from "../components/AgendarCitaPage/Lista_Alumnos.jsx";
import BotonSiguiente from "../components/AgendarCitaPage/BotonNext/BotonSiguiente";
import NavBar from "../components/NavBar/NavBar";
import VerCitas_Card from "../components/VerCitas/VerCitas_Card.jsx";

function VerCitas(){
    return(
        <div className="VerCitas-page">
            <section>
                <li>Asesorias Agendadas</li>
                <li>Asesorias por Registrar</li>
                <li>Asesorias Realizadas</li>
            </section>
            <div className='VerCitas-page-Container'>
                <VerCitas_Card></VerCitas_Card>
                <VerCitas_Card></VerCitas_Card>
                <VerCitas_Card></VerCitas_Card>
                <VerCitas_Card></VerCitas_Card>
                <VerCitas_Card></VerCitas_Card>
            </div>
        </div>
    )
}

export default VerCitas;
