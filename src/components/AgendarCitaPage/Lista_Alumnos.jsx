import React, {useEffect, useState} from 'react';
import usuario from "../../assets/usuario.svg";
import Profile from "./Profile/Profile";

const Lista_Alumnos = () => {

  //El useState se utiliza para el guardado del id del estudiante que se selecciono en la tarjeta
  const [Alumnos, setAlumnos] = useState()

  useEffect(() =>{
      },[Alumnos]
  )

  //Esta es la lista que mando en el área de Agendar, son datos que invente para poder terminar el diseño de las tarjetas, ya que no tenía el back
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
  return (

    //El ProfileList es el componente que contiene todas las tarjetas de los perfiles de los estudiantes
    //Este map se encarga de mandar un mapa de todos los perfiles o todos los objetos que se encuentran en la lista de alumnos
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
  )
}

export default Lista_Alumnos