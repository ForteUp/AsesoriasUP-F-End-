import React from 'react';
import './LogIn.scss';
import Tree from '../assets/tree.png';

function LogIn() {
  return (
    <div className='login-page'>
        <h1>Sexopene</h1>
        <p>Hola Pompis</p>
        <div className='login-container'>
            <img src={Tree} alt='tree'/>
        </div>
    </div>
  )

}

export default LogIn