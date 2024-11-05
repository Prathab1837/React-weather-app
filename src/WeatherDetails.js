import React from 'react'
import clearIcon from './assets/clear.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.png';
import humidityIcon from './assets/humidity.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';
import windIcon from './assets/wind.png';

function WeatherDetails(props) {
    const {icon, temp, city, country, lat, long, wind, humidity} = props;
  return (
    <>
    <div className='image'>
        <img src={icon} alt="pic" height="150px" width="150px" />
    </div>

    <div className="temp">{temp}<sup>o</sup>C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>

    <div className='cord'>
        <div>
            <span className="latitude">Latitude</span>
            <span>{lat}</span>
        </div>
        <div>
            <span className="longitude">Longitude</span>
            <span>{long}</span>
        </div>
    </div>

    <div className="data-container">
        <div className="box box1">
            <img src={windIcon} alt="wind" height="60px" width="60px" />
            <div className='windSpeed'>{wind} km/h</div>
            <div className='text'>WindSpeed</div>
        </div>
        <div className="box box2">
            <img src={humidityIcon} alt="humidity" height="60px" width="60px" />
            <div className='humidityPercentage'>{humidity} %</div>
            <div className='text'>Humidity</div>
        </div>
    </div>
    </>
  )
}

export default WeatherDetails