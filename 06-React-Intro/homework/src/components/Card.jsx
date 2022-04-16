import React from 'react';

export default function Card (recurso) {

  function onClose() {
    return alert(recurso.name)
  }

  
    return (
      <div>
        <button onClick={onClose}> X </button>
        <div>
          <h2>{recurso.name}</h2>
        </div>
        <div>
          <h3>Min</h3>
          <h3>{recurso.min}</h3>
        </div>
        <div>
          <h3>Max</h3>
          <h3>{recurso.max}</h3>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima'/>
        </div>
      </div>
    )
  
}