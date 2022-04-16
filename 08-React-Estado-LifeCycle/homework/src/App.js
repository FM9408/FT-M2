import React, {useState} from 'react';
import Nav from './components/Nav';
import './App.css';
import Cards from './components/Cards'


export default function App() {
  const [ciudades, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}&units=metric`)
      .then((respuesta) => {return respuesta.json()})
      .then((recurso) => {
        const newciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        }
        const ciudadEncontrada = ciudades.find(ciudad =>ciudad.id === newciudad.id)
          
        if(ciudadEncontrada) return alert("la ciudad ya se encuentra!")
        else {
          setCities((todasLasCiudadesActuales) => [...todasLasCiudadesActuales, newciudad])
        }
      });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }


  return (
    <div className="App">
      { /* Tu código acá: */ }
      <div>
        <Nav onSearch={onSearch} />
      </div>   
      <div>
      <Cards cities={ciudades} onClose={onClose} />
      </div> 
    </div>
  );
}


