import React from "react";
import InputField from "../components/Global/InputField";
import "./InfoAsesoria.scss";
import NavBar from "../components/Global/NavBar";
import Button from "../components/Global/Button";

function InfoAsesoria() {
    return (
        <div className="infoAsesoria-page">
            <NavBar />
            <div className="info-asesoria">
                <h1 className="Agendar-title">Agendar Una Asesoría</h1>
                <p className="info-asesoria-header">
                    Ayudanos con más información de la Asesoría
                </p>
                <div className="info-asesoria-container">
                    <InputField
                        className="info-asesoria-container-title"
                        textDisplay={[
                            <p className="text-info">Título</p>,
                            <span className="material-icons">edit</span>,
                        ]}
                        type="text"
                        placeholder=""
                    />
                    <div className="info-asesoria-container-date">
                        <InputField
                            className="info-asesoria-container-day"
                            textDisplay={[
                                <p className="text-info">Fecha</p>,
                                <span class="material-icons">event</span>,
                            ]}
                            type="date"
                            placeholder=""
                        />
                        <InputField
                            className="info-asesoria-container-time"
                            textDisplay={[
                                <p className="text-info">Hora</p>,
                                <span class="material-icons">schedule</span>,
                            ]}
                            type="time"
                            placeholder=""
                        />
                    </div>
                    <InputField
                        className="info-asesoria-container-place"
                        textDisplay={[
                            <p className="text-info">Lugar</p>,
                            <span class="material-icons">place</span>,
                        ]}
                        type="text"
                        placeholder=""
                    />
                </div>

                <div className="buttons-container">
                    <Button
                        className="back-button"
                        type="button"
                        buttonContent="Atras"
                    />
                    <Button
                        className="next-button"
                        type="button"
                        buttonContent="Siguiente"
                    />
                </div>
            </div>
        </div>
    );
}

export default InfoAsesoria;
