import React from "react";

function VerCitas_Card(props){

    return(
        <div className='Vercitas-Card'>
            {/*Props.Nombre y bla bla*/}
            <p> {props.nombre}</p>
            <p> {props.correo}</p>
            <p> {props.fecha}</p>
            <p> {props.titulo}</p>
            <p> {props.lugar}</p>
        </div>
    )
}

export default VerCitas_Card;