import React from "react";
import "./VerCitas_Card.scss";
import File from "../../assets/Vectorfile.svg";
import Map from "../../assets/Vectormap.svg";
import Update from "../../assets/lapiz.png";
import Delete from "../../assets/Vectordelete.svg";
import Check from "../../assets/Vectorcheck.svg";
import Close from "../../assets/Vectorclose.svg";

function VerCitas_Card(props){
    let typeCard;

    if (props.tipo === "Agendada" && props.vista === "AsesoriasAgendadas"){
        typeCard = (
                <div className='VerCitas-Card-body'>
                    <div className="Cardtop-container">
                        <div className="PersonInfo-container">
                            <div className="PersonInfo-ProfilePic">
                                <img src={props.img} className="PersonInfo-img" alt=""/>
                            </div>
                            <div className="PersonInfo-general">
                                <p className="PersonInfo-Name"> {props.nombre}</p>
                                <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
                            </div>
                        </div>

                    <div className="OptionIcons">
                        <div className="trash-pic">
                            <img src={Delete} className="trash-img" alt=""/>
                        </div>
                        <div className="update-pic">
                            <img src={Update} className="update-img" alt=""/>
                        </div>
                    </div>
                </div>


                <div className="VerCitas-Info">
                    <div className="VerCitas-Card-title">
                        <div className="file-pic">
                            <img src={File} className="file-img" alt=""/>
                        </div>
                        <p className="Card-title-text">{props.titulo}</p>
                    </div>
                    <div className="VerCitas-Card-ubi">
                        <div className="map-pic">
                            <img src={Map} className="map-img" alt=""/>
                        </div>
                        <p className="Card-ubi-text"> {props.lugar}</p>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.tipo === "Realizada" && props.vista === "AsesoriasRealizadas"){
        typeCard = (
            <div className="Card-Registrar-body">
                <div className="Cardtop-container">
                    <div className="PersonInfo-container">
                        <div className="PersonInfo-ProfilePic">
                            <img src={props.img} className="PersonInfo-img" alt=""/>
                        </div>
                        <div className="PersonInfo-general">
                            <p className="PersonInfo-Name"> {props.nombre}</p>
                            <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.tipo === "Registrar" && props.vista === "AsesoriasRegistrar"){
        typeCard = (
            <div className="Card-Registrar-body">
                <div className="Cardtop-container">
                    <div className="PersonInfo-container">
                        <div className="PersonInfo-ProfilePic">
                            <img src={props.img} className="PersonInfo-img" alt=""/>
                        </div>
                        <div className="PersonInfo-general">
                            <p className="PersonInfo-Name"> {props.nombre}</p>
                            <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
                        </div>
                    </div>

                    <div className="OptionIcons">
                        <div className="close-pic">
                            <img src={Close} className="close-img" alt=""/>
                        </div>
                        <div className="check-pic">
                            <img src={Check} className="check-img" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <>
        {typeCard}
        </>
    )
}

export default VerCitas_Card;