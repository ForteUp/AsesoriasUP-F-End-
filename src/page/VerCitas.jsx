import React, {useState} from 'react';
import "./VerCitas.scss";
import NavBar from "../components/NavBar/NavBar";
import VerCitas_Card from "../components/VerCitas/VerCitas_Card.jsx";
import usuario from "../assets/usuario.svg";
import	Calendar from "../assets/VectorCalendar.svg";

function VerCitas() {
    const [data, setData] = useState([
        {
          Matricula: 1,
          Nombre: "Miguel Herrera",
          Fecha: "18/02/23",
          Hora: "02:30 am",
          Titulo: "Segunda Asesoría del Semestre",
          Lugar: "Café",
          img: usuario,
        },
        {
          Matricula: 2,
          Nombre: "Miguel Herrera",
          Fecha: "18/02/23",
          Hora: "02:30 am",
          Titulo: "Segunda Asesoría del Semestre",
          Lugar: "Café",
          img: usuario,
        },
        {
            Matricula: 3,
            Nombre: "Miguel Herrera",
            Fecha: "18/02/23",
            Hora: "02:30 am",
            Titulo: "Segunda Asesoría del Semestre",
            Lugar: "Café",
            img: usuario,
        },
        {
            Matricula: 4,
            Nombre: "Miguel Herrera",
            Fecha: "18/02/23",
            Hora: "02:30 am",
            Titulo: "Segunda Asesoría del Semestre",
            Lugar: "Café",
            img: usuario,
        },
        {
          Matricula: 5,
          Nombre: "Miguel Herrera",
          Fecha: "18/02/23",
          Hora: "02:30 am",
          Titulo: "Segunda Asesoría del Semestre",
          Lugar: "Café",
          img: usuario,
        },
      ]);
  return (
    <div className='VerCitas-page'>
        <NavBar/>
        <div className='VerCitas-container'>
            <div className='MenuOptions-container'>
                <p className='AsesoriasAgendadas'>Asesorias Agendadas</p>
                <p className='AsesoriasRegistrar'>Asesorias por Registrar</p>
                <p className='AsesoriasRealizadas'>Asesorias Realizadas</p>
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
                              nombre = {cita.Nombre}
                              correo = {`${cita.Matricula}@up.edu.mx`}
                              fecha = {`${cita.Fecha} ${cita.Hora}`}
                              titulo = {cita.Titulo}
                              lugar = {cita.Lugar}
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