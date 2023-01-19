import React, {useContext, useEffect, useState} from "react";
import "./VerCitas.scss";
import VerCitas_Card from "../components/VerCitas/VerCitas_Card.jsx";
import AuthContext from "../Context/AuthContext.jsx";
import {server_url} from "../../main.js";

function VerCitas(){

    const [data, setData] = useState([]);
    let { user } = useContext(AuthContext);

    useEffect(() => {
    // Send data to the backend via POST
    fetch(`${server_url}/citas_${user.tipo}/${user.id}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      // .then(data => console.log(data['data']));
      .then((data) => {
        console.log(data);
        setData(data);
      });
    }, []);

    return(
        <div className="VerCitas-page">
            <section>
                <li>Asesorias Agendadas</li>
                <li>Asesorias por Registrar</li>
                <li>Asesorias Realizadas</li>
            </section>
            <div className='VerCitas-page-Container'>
                {data.map((cita) => {
                    return (
                        <VerCitas_Card
                        nombre = {cita.Alumno.Nombre}
                        correo = {`${cita.Alumno.Matricula}@up.edu.mx`}
                        fecha = {`${cita.Fecha} ${cita.Hora}`}
                        titulo = {cita.Titulo}
                        lugar = {cita.Lugar}
                        ></VerCitas_Card>
                    )
                })}
                {/*<VerCitas_Card></VerCitas_Card>*/}
                {/*<VerCitas_Card></VerCitas_Card>*/}
                {/*<VerCitas_Card></VerCitas_Card>*/}
                {/*<VerCitas_Card></VerCitas_Card>*/}
                {/*<VerCitas_Card></VerCitas_Card>*/}
            </div>
        </div>
    )
}

export default VerCitas;
