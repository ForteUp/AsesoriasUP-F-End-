import React, {useEffect, useState} from "react";
import "./AgendarCita.scss";
import Lista_Alumnos from "../components/AgendarCitaPage/Lista_Alumnos.jsx";
import BotonSiguiente from "../components/AgendarCitaPage/BotonNext/BotonSiguiente";
import NavBar from "../components/NavBar/NavBar";
import Check from "../assets/Vectorapproved.svg";
import Error from "../assets/close.png";
import BotonRegresar from "../components/AgendarCitaPage/BotonBack/BotonRegresar";
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
                <Lista_Alumnos/>
                <div className="Boton-container">
                  <BotonSiguiente/>
                </div>
            </div>
            {/* <div className="AsesoriaApproved">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <div className="AsesoriaApproved-body">
                    <div className="AsesoriaApproved-container">
                        <div className="title-Approved">
                            <p className="title-Approved1">Gracias</p>
                            <p className="title-Approved2">Asesoría Agendada</p>
                        </div>
                        <div className="circleApproved">
                            <div className="check-pic">
                                <img className="check-img" src={Check}/>
                            </div>
                        </div>
                    </div>
                    <BotonRegresar/>
                </div>
            </div>  */}
{/* 
            <div className="AsesoriaDenied">
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>
                <div className="AsesoriaDenied-body">
                    <div className="AsesoriaDenied-container">
                        <div className="title-Denied">
                            <p className="title-Denied1">Lo sentimos</p>
                            <p className="title-Denied2">Asesoría No Agendada</p>
                        </div>
                        <div className="circleDenied">
                            <div className="check-pic">
                                <img className="check-img" src={Error}/>
                            </div>
                        </div>
                    </div>
                    <BotonRegresar/>
                </div>
            </div>  */}
              
            </div>
    )
}

export default AgendarCita;
