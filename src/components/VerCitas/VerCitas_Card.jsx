import React from "react";
import "./VerCitas_Card.scss";
import File from "../../assets/Vectorfile.svg";

function VerCitas_Card(props){

    return(
        <div className='VerCitas-Card-body'>
            <div className="PersonInfo-container">
                <div className="PersonInfo-ProfilePic">
                    <img src={props.img} className="PersonInfo-img"/>
                </div>
                <p className="PersonInfo-Name"> {props.nombre}</p>
                <p className="PersonInfo-Info"> {props.correo} - {props.fecha}</p>
            </div>
            <div className="VerCitas-Card-title">
                <div className="file-pic">
                    <img src={File} className="file-img"/>
                </div>
                <p className="Card-title-text">{props.titulo}</p>
            </div>
            <p> {props.lugar}</p>
        </div>
    )
}

export default VerCitas_Card;