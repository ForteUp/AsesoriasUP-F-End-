import React from 'react';
import "./Profile.scss";
import { useState } from 'react';

const Profile = (props) => {
  const [ backgroundColor, setBackgroundColor ] = useState('#f44');

  const cambiarColor = () => {
    setBackgroundColor('#fff')

  };

  return (
    <div style={{'backgroundColor': backgroundColor}}  className='ProfileCard'
     onClick={() => {
      props.estadoPadre(props.id)
     cambiarColor()
      }}>
        <img src={props.img} className="ProfileImg"/>
        <div className='ProfileInfo'>
            <h1 className='ProfileName'>{props.name}</h1>
            <p className='ProfileEmail'>{props.email}</p>
        </div>
    </div>
  )
}

export default Profile