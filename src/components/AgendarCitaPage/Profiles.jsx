import React, {useState} from 'react';
import usuario from "../../assets/usuario.svg";
import Profile from "./Profile/Profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Eduardo Daniel Ramírez Prado",
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
      id: 3,
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
      id: 3,
      name: "Eduardo Daniel Ramírez Prado",
      email: "0000000@up.edu.mx",
      img: usuario,
    },
  ]);
  return (
    <div className='ProfileList'>
      {profiles.map((profiles) => {
        return(
          <Profile name={profiles.name} email={profiles.email} img={profiles.img}/>
        )
      })}
    </div>
  )
}

export default Profiles