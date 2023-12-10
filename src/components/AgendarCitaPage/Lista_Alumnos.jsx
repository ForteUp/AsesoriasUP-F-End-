import React, {useEffect, useState} from 'react';
import usuario from "../../assets/usuario.svg";
import Profile from "./Profile/Profile";

const Lista_Alumnos = (props) => {
  return (
    <div className='ProfileList'>
      {props.profiles.map((profiles) => {
        return(
          <Profile
              key={props.id}
              name={profiles.name}
              email={profiles.email}
              img={profiles.img}
              id={profiles.id}
              estadoPadre={props.setAlumnos}
              estado={props.Alumnos}
          />
        )
      })}
    </div>
  )
}

export default Lista_Alumnos