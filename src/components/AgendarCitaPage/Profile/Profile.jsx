import React from 'react';
import "./Profile.scss";


const Profile = (props) => {

  return (
    <div className="ProfileCard" onClick={() => {
        if(props.estado != null){
            console.log(`Oye el alumno ${props.estado} fue previamente seleccionado`)
        }
        props.estadoPadre(props.id)
        console.log(props.id)
      }}>
        <img src={props.img} className="ProfileImg" alt=''/>
        <div className='ProfileInfo'>
            <h1 className='ProfileName'>{props.name}</h1>
            <p className='ProfileEmail'>{props.email}</p>
        </div>
    </div>
  )
}

export default Profile