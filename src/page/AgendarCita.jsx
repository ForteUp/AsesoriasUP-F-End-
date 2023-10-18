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
  
  //El useState lo usabamos para guardar el id del usuario en el que se hizo click

  //Eso pensaba, no recuerdo para que, pero era para algo de back
  //Borre una lista de alumnos que no se necesitaba
  const [Alumnos, setAlumnos] = useState()
  let navigate = useNavigate()

  // useEffect(() =>{
  //     },[Alumnos]
  // )
    return(

      //Hay tres vistas comentadas, pero son 4 vistas
      //La primera es para seleccionar al estudiante con el que vas a tener la asesoria
      //La segunda es para registrar los datos de la asesoria, pero esa se encuentra en infoasesoria, que esta en la carpeta de AgendarCitaPage
      //La tercera son dos, una donde dice si se registro la asesoria con exito o no, por eso hay otras dos vistas comentadas, el aproveed y el denied

      //AgendarCita-page es el contenedor general de todas las vistas posibles
        <div className="AgendarCita-page">

          {/*NavBar es el componente de la navbar general, es el llamado del componente al contenedor de AgendarCita*/}
            <NavBar/>

            {/*Esta es la vista donde muestra la lista de alumnos con los que puede agendar una asesoria*/}

            {/*Agendar-container es todo lo que lleva la vista general, las medidas de la vista y todo*/}

            <div className="Agendar-container">
            
            {/* Agendar-title es el componente que guarda el titulo de la vista de la página */}
                <h1 className="Agendar-title">
                    Agendar Una Asesoría
                </h1>

                {/* AgendarProfile es el componente que tiene el texto debajo del titulo de la vista */}
                <h2 className="AgendarProfile">Selecciona con quién vas a tener la asesoría</h2>

                {/* Lista_Alumnos es el componente donde mando el contenedor de toda la liista de los alumnos */}
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

            {/* <div className="AsesoriaDenied">
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
};

export default AgendarCita;
