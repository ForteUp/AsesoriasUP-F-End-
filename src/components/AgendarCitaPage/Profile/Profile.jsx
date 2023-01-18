import React from 'react';
import "./Profile.scss";
const Profile = (props) => {
  return (
    <div className='ProfileCard'>
        <img src={props.img} className="ProfileImg"/>
        <div className='ProfileInfo'>
            <h1 className='ProfileName'>{props.name}</h1>
            <p className='ProfileEmail'>{props.email}</p>
        </div>
    </div>
  )
}

export default Profile