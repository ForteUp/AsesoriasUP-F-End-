import React from 'react'
import "./BotonAtras.scss";

function BotonAtras(props) {
  return (
    <div className='BotonAtras-body' onClick={props.func}>
        <div className='BotonAtras-container'>
            <p className='BotonAtras-text'>Atras</p>
        </div>
    </div>
  )
}

export default BotonAtras