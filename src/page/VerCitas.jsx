import React, {useContext, useEffect, useState} from 'react';
import "./VerCitas.scss";
import NavBar from "../components/NavBar/NavBar";
import VerCitas_Card from "../components/VerCitas/VerCitas_Card.jsx";
import usuario from "../assets/usuario.svg";
import	Calendar from "../assets/VectorCalendar.svg";
import AuthContext from "../Context/AuthContext.jsx";
import {server_url} from "../../main.js";
import {useNavigate} from "react-router-dom";

function VerCitas() {
    const [data, setData] = useState([])
    const [vista, setVista] = useState('Agendada')
    let { user } = useContext(AuthContext);

    function getData() {
    // Send data to the backend via POST
    fetch(`${server_url}/citas_${user.tipo}/${vista}/${user.id}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      // .then(data => console.log(data['data']));
      .then((data) => {
        console.log(data);
        setData(data);
      });
    }

    useEffect(() => {
        getData()
    }, [vista]);

  return (
    <div className='VerCitas-page'>
        <NavBar/>
        <div className='VerCitas-container'>
            <div className='MenuOptions-container'>
                <p className='AsesoriasAgendadas' onClick={() => setVista('Agendada')}>Asesorias Agendadas</p>
                <p className='AsesoriasRegistrar' onClick={() => setVista('Registrada')}>Asesorias por Registrar</p>
                <p className='AsesoriasRealizadas' onClick={() => setVista('Realizada')}>Asesorias Realizadas</p>
            </div>
            <div className='AsesoriasAgendadas-container'>
              <div className='AsesoriasAgendadas-title'>
                <div className='calendar-pic'>
                  <img src={Calendar} className="calendar-img"/>
                </div>
                <h1 className='AsesoriasAgendadas-title-text'>Asesorias Agendadas</h1>
              </div>
              <div className='AsesoriasAgendadas-cards'>
                  {data.map((cita) => {
                          return (
                              <VerCitas_Card
                              img = {cita.img}
                              nombre = {cita.Alumno.Nombre}
                              // correo = {`${cita.Alumno.Matricula}@up.edu.mx`}
                              correo = {cita.Alumno.Correo}
                              fecha = {`${cita.Fecha} ${cita.Hora.substring(0,cita.Hora.length-3)}`}
                              titulo = {cita.Titulo}
                              lugar = {cita.Lugar}
                              tipo ={vista}
                              />
                          )
                      })}
              </div>
            </div>
        </div>

    </div>
  )
}

export default VerCitas