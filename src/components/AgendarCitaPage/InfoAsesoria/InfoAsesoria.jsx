import React from "react";
import InputField from "../../Global/InputField";
import Button from "../../Global/Button";

import "./InfoAsesoria.scss";
import {useLocation} from "react-router-dom";

function InfoAsesoria() {
    const {state} = useLocation()
    const {Alumnos} = state;
    console.log(Alumnos)
    return (
        <div className="info-asesoria">
            <div className="info-asesoria-header">
                <p>Ayudanos con más información de la Asesoría</p>
            </div>
            <form action="">
                <div className="info-asesoria-fields">
                    <InputField
                        className=""
                        textDisplay={[
                            "Título ",
                            <span className="material-icons">edit</span>,
                        ]}
                        type="text"
                        placeholder=""
                    />
                    <div className="date-time">
                        <InputField
                            className=""
                            textDisplay={[
                                "Fecha ",
                                <span class="material-icons">event</span>,
                            ]}
                            type="date"
                            placeholder=""
                        />
                        <InputField
                            className=""
                            textDisplay={[
                                "Hora ",
                                <span class="material-icons">schedule</span>,
                            ]}
                            type="time"
                            placeholder=""
                        />
                    </div>
                    <InputField
                        className=""
                        textDisplay={[
                            "Lugar ",
                            <span class="material-icons">place</span>,
                        ]}
                        type="text"
                        placeholder=""
                    />
                </div>
                <div className="info-asesoria-buttons">
                    <Button
                        className="back-button"
                        type="button"
                        buttonContent="Atras"
                    />
                    <Button
                        className="next-button"
                        type="submit"
                        buttonContent="Siguiente"
                    />
                </div>
            </form>
        </div>
    );
}

export default InfoAsesoria;
