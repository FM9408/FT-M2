import React, { useState, useEffect, useRef} from 'react';
import './Timer.css';


const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const tiempo =useRef(null)

  function toggle(){
    setActivo(!activo)
  }
  function reset() {
    setSegundos(0)
    setActivo(false)
  }

  function cambiarTipo() {
    setSegundos(0)
    if(tipo === 'Contador') setTipo('Cuenta Regresiva') 
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  useEffect(()=> {
    let intervalo = null;
    if(activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      },1000)
    }
    if(activo && tipo === 'Cuenta Regresiva' && segundos>0) {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos -1);
      }, 1000)
    }
    if(!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo)
    } return () => clearInterval(intervalo);
  }, [activo, segundos, tipo])

  function agregarSegundos() {
    let ref = tiempo.current.value
    setSegundos(ref)
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo? 'active': 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa': 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambiarTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" onChange={agregarSegundos}ref={tiempo} placeholder="Ingresa Segundos" autoComplete="off"/>}
      
    </div>
  );
};

export default Timer;