import React from 'react';
import './Card.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className='tarjeta'>
      <button className='close-button' onClick={onClose}> X </button>
      <div className='ciudad'>
        <h2>{props.name}</h2>
      </div>
      <div className='temp'>
        <h3>Max</h3>
        <h3>{props.max}</h3>
      </div>
      <div className='temp'>
        <h3>Min</h3>
        <h3>{props.min}</h3>
      </div>
      <div className='imge'>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
    </div>
  )
};