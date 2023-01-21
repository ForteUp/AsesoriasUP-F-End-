import React from "react";
import "./AgendarCita.scss";
import Lista_Alumnos from "../components/AgendarCitaPage/Lista_Alumnos.jsx";
import BotonSiguiente from "../components/AgendarCitaPage/BotonNext/BotonSiguiente";
import NavBar from "../components/NavBar/NavBar";
import Check from "../assets/Vectorapproved.svg";
import Error from "../assets/close.png";
import BotonRegresar from "../components/AgendarCitaPage/BotonBack/BotonRegresar";

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
            {/* <div className="AsesoriaApproved">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <div className="AsesoriaApproved-body">
                    <div className="AsesoriaApproved-container">
                        <div className="title-Approved">
                            <p className="title-Approved1">Gracias</p>
                            <p className="title-Approved2">Asesoría Agendada</p>
                        </div>
                        <div className="circleApproved">
                            <div className="check-pic">
                                <img className="check-img" src={Check}/>
                            </div>
                        </div>
                    </div>
                    <BotonRegresar/>
                </div>
            </div>  */}

            {/* <div className="AsesoriaDenied">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <div className="AsesoriaDenied-body">
                    <div className="AsesoriaDenied-container">
                        <div className="title-Denied">
                            <p className="title-Denied1">Lo sentimos</p>
                            <p className="title-Denied2">Asesoría No Agendada</p>
                        </div>
                        <div className="circleDenied">
                            <div className="check-pic">
                                <img className="check-img" src={Error}/>
                            </div>
                        </div>
                    </div>
                    <BotonRegresar/>
                </div>
            </div> */}
        </div>
    )
};

export default AgendarCita;
