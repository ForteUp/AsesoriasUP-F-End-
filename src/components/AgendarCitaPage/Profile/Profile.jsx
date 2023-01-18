import React, {useState} from 'react';
import "./Profile.scss";
import Card from '../Card.jsx';

const Profile = (props) => {
  const [Alumno, setAlumno] = useState();


  return (
    <div className='ProfileCard'  onClick={() => setAlumno(props.id)}>
        <img src={props.img} className="ProfileImg"/>
        <div className='ProfileInfo'>
            <h1 className='ProfileName'>{props.name}</h1>
            <p className='ProfileEmail'>{props.email}</p>
        </div>
        <Card a={Alumno}/>
    </div>
  )
}

export default Profile