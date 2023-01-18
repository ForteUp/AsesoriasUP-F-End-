import React from 'react';
import "./Profile.scss";
import { useState } from 'react';


const Profile = (props) => {
  const [isClicked, setIsClicked] = useState(-1);
  const [selectedAnswer, setSelectedAnswer] = useState();

  function handleToggle(event, index) {
    setIsClicked(index);
    setSelectedAnswer(event.target.textContent);
  }

  return (
    <div className={`ProfileCard ${
      isClicked === index ? "button-clicked" : null
    }
  `}
    onClick={(event) => {
      handleToggle(event, index);
    }}
  >
        <img src={props.img} className="ProfileImg"/>
        <div className='ProfileInfo'>
            <h1 className='ProfileName'>{props.name}</h1>
            <p className='ProfileEmail'>{props.email}</p>
        </div>
    </div>
  )
}

export default Profile