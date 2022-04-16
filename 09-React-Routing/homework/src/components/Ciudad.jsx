
import {React, useState} from "react";
import {useParams} from "react-router-dom"




export default function Ciudad({city}) {

    const {ciudadId} = useParams();
    const [infoCity, setInfoCity] = useState({})
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadId}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}`)
      .then(r => r.json())
      .then((recurso) => {
            const ciudadConsultada = {
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
            setInfoCity(ciudadConsultada)
        })
      
        if(city) {
            return (
                <div className="ciudad">
                        <div className="container">
                            <h2>{city.name}</h2>
                            <div className="info">
                                <div>Temperatura: {city.temp} ºC</div>
                                <div>Clima: {city.weather}</div>
                                <div>Viento: {city.wind} km/h</div>
                                <div>Cantidad de nubes: {city.clouds}</div>
                                <div>Latitud: {city.latitud}º</div>
                                <div>Longitud: {city.longitud}º</div>
                            </div>
                    </div>
                </div>
            )

        } else return (
            <div>
                NO SE ENCONTRÓ LA CIUDAD INTENTA DE NUEVO.
            </div>
        )
}