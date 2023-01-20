import React, {useEffect, useState} from "react";
import "./AgendarCita.scss";
import Lista_Alumnos from "../components/AgendarCitaPage/Lista_Alumnos.jsx";
import BotonSiguiente from "../components/AgendarCitaPage/BotonNext/BotonSiguiente";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/AgendarCitaPage/Profile/Profile.jsx";
import usuario from "../assets/usuario.svg";
import {useNavigate} from "react-router-dom";

function AgendarCita(){


  const [Alumnos, setAlumnos] = useState()
    let navigate = useNavigate()

  // useEffect(() =>{
  //     },[Alumnos]
  // )
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Miguel Herrera",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
    {
      id: 2,
      name: "Eduardo Daniel Ramírez Prado",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
    {
      id: 3,
      name: "Eduardo Daniel Ramírez Prado",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
    {
      id: 4,
      name: "Eduardo Daniel Ramírez Prado",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
    {
      id: 5,
      name: "Eduardo Daniel Ramírez Prado",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
    {
      id: 6,
      name: "Eduardo Daniel Ramírez Prado",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
  ]);


    return(
        <div className="AgendarCita-page">
            <NavBar/>
            <div className="Agendar-container">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <h2 className="AgendarProfile">Selecciona con quién vas a tener la asesoría</h2>
                {/*<Lista_Alumnos/>*/}
                <div className='ProfileList'>
                  {profiles.map((profiles) => {
                    return(
                      <Profile
                          name={profiles.name}
                          email={profiles.email}
                          img={profiles.img}
                          id={profiles.id}
                          estadoPadre={Alumnos => setAlumnos(Alumnos)}
                          estado={Alumnos}
                      />

                    )
                  })}
                </div>
                {/*<BotonSiguiente/>*/}
                <div onClick={() => {navigate("/registrar", { state: {Alumnos:Alumnos} })}} className='BotonSiguiente-body'>
                    <div className='BotonSiguiente-container'>
                        <p className='BotonSiguiente-text'>Siguiente</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AgendarCita;
