import React from "react";
import InputField from "../../Global/InputField";
import "./InfoAsesoria.scss";
import NavBar from "../../NavBar/NavBar";
import BotonSiguiente from "../BotonNext/BotonSiguiente";
import BotonAtras from "../BotonAtras/BotonAtras";
function InfoAsesoria(props) {
    return (
        <div className="infoAsesoria-page">
            <div className="info-asesoria">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <p className="info-asesoria-header">Ayudanos con más información de la Asesoría</p>
                <form action="">
                    <div className="info-asesoria-fields-container">
                        <div className="info-asesoria-fields">
                            <InputField
                                className=""
                                textDisplay={[
                                    <p className="text-info">Título</p>,
                                    <span className="material-icons">edit</span>,
                                ]}
                                type="text"
                                placeholder=""
                            />
                            <div className="date-time">
                                <InputField
                                    className=""
                                    textDisplay={[
                                        <p className="text-info">Fecha</p>,
                                        <span class="material-icons">event</span>,
                                    ]}
                                    type="date"
                                    placeholder=""
                                />
                                <InputField
                                    className=""
                                    textDisplay={[
                                        <p className="text-info">Hora</p>,
                                        <span class="material-icons">schedule</span>,
                                    ]}
                                    type="time"
                                    placeholder=""
                                />
                            </div>
                            <InputField
                                className=""
                                textDisplay={[
                                    <p className="text-info">Lugar</p>,
                                    <span class="material-icons">place</span>,
                                ]}
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                </form>
                <div className="buttons-container">
                    <BotonAtras func={()=>{
                        props.register(false);
                        props.select(true);
                        console.log(5)
                    }}/>
                    <BotonSiguiente/>
                </div>
            </div>
        </div>
    );
}

export default InfoAsesoria;
