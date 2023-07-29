import React, {useEffect, useState} from 'react';
import usuario from "../assets/usuario.svg";
import Profile from "./Profile/Profile";

const Lista_Alumnos = () => {
  const [Alumnos, setAlumnos] = useState()

  useEffect(() =>{
      },[Alumnos]
  )
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