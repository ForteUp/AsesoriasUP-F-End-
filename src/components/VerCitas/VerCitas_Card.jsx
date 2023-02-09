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

    if (props.tipo === "Agendada"){
        typeCard = (
                <div className='VerCitas-Card-body'>
                    <div className="Cardtop-container">
                        <div className="PersonInfo-container">
                            <div className="PersonInfo-ProfilePic">
                                <img src={props.img} className="PersonInfo-img"/>
                            </div>
                            <div className="PersonInfo-general">
                                <p className="PersonInfo-Name"> {props.nombre}</p>
                                <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
                            </div>
                        </div>

                    <div className="OptionIcons">
                        <div className="trash-pic">
                            <img src={Delete} className="trash-img"/>
                        </div>
                        <div className="update-pic">
                            <img src={Update} className="update-img"/>
                        </div>
                    </div>
                </div>


                <div className="VerCitas-Info">
                    <div className="VerCitas-Card-title">
                        <div className="file-pic">
                            <img src={File} className="file-img"/>
                        </div>
                        <p className="Card-title-text">{props.titulo}</p>
                    </div>
                    <div className="VerCitas-Card-ubi">
                        <div className="map-pic">
                            <img src={Map} className="map-img"/>
                        </div>
                        <p className="Card-ubi-text"> {props.lugar}</p>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.tipo === "Realizada"){
        typeCard = (
            <div className="Card-Registrar-body">
                <div className="Cardtop-container">
                    <div className="PersonInfo-container">
                        <div className="PersonInfo-ProfilePic">
                            <img src={props.img} className="PersonInfo-img"/>
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
    else{
        typeCard = (
            <div className="Card-Registrar-body">
                <div className="Cardtop-container">
                    <div className="PersonInfo-container">
                        <div className="PersonInfo-ProfilePic">
                            <img src={props.img} className="PersonInfo-img"/>
                        </div>
                        <div className="PersonInfo-general">
                            <p className="PersonInfo-Name"> {props.nombre}</p>
                            <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
                        </div>
                    </div>

                    <div className="OptionIcons">
                        <div className="close-pic">
                            <img src={Close} className="close-img"/>
                        </div>
                        <div className="check-pic">
                            <img src={Check} className="check-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <>
        <div className='VerCitas-Card-body'>
                    <div className="Cardtop-container">
                        <div className="PersonInfo-container">
                            <div className="PersonInfo-ProfilePic">
                                <img src={props.img} className="PersonInfo-img"/>
                            </div>
                            <div className="PersonInfo-general">
                                <p className="PersonInfo-Name"> {props.nombre}</p>
                                <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
                            </div>
                        </div>

                    <div className="OptionIcons">
                        <div className="trash-pic">
                            <img src={Delete} className="trash-img"/>
                        </div>
                        <div className="update-pic">
                            <img src={Update} className="update-img"/>
                        </div>
                    </div>
                </div>


                <div className="VerCitas-Info">
                    <div className="VerCitas-Card-title">
                        <div className="file-pic">
                            <img src={File} className="file-img"/>
                        </div>
                        <p className="Card-title-text">{props.titulo}</p>
                    </div>
                    <div className="VerCitas-Card-ubi">
                        <div className="map-pic">
                            <img src={Map} className="map-img"/>
                        </div>
                        <p className="Card-ubi-text"> {props.lugar}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerCitas_Card;