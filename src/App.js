import './App.css';
// images
import searchIcon from './assets/search.png';
import clearIcon from './assets/clear.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.png';
import humidityIcon from './assets/humidity.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';
import windIcon from './assets/wind.png';
import WeatherDetails from './WeatherDetails';
import { useState } from 'react';


function App() {
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("-----");
  const [country, setCountry] = useState("--");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [text, setText] = useState();

  const weatherCondition = {
    "01d" : clearIcon,
    "01n" : clearIcon,
    "02d" : cloudIcon,
    "02n" : cloudIcon,
    "03d" : drizzleIcon,
    "03n" : drizzleIcon,
    "04d" : drizzleIcon,
    "04n" : drizzleIcon,
    "09d" : rainIcon,
    "09n" : rainIcon,
    "10d" : rainIcon,
    "10n" : rainIcon,
    "11d" : rainIcon,
    "11n" : rainIcon,
    "13d" : snowIcon,
    "13n" : snowIcon,
    "50d" : snowIcon,
    "50n" : snowIcon
  };

  const search = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=3570fa8340cfd0096c1121cceb26ce57&units=Metric`
  
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      if (data.cod === "404") {
        console.error("city not found");
      } else {
        setTemp(data.main.temp);
        setCity(data.name);
        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLong(data.coord.lon);
        setWind(data.wind.speed);
        setHumidity(data.main.humidity);
        const weatherIconCode = data.weather[0].icon;
        setIcon(weatherCondition[weatherIconCode]);
      }
    } catch (error) {
      console.error("an error occured : ", error.message);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  }
  return (
   <>
   <div className="container">
      <div className="input-container">
        <input className="city-input" placeholder="Search City" type="text" onChange={handleCity} value={text} />
        <div className="search-icon" onClick={()=>search()}>
          <img src={searchIcon} alt="search" height="25px" width="25px" />
        </div>
      </div>

      <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} long={long} wind={wind} humidity={humidity} />
   </div>
   </>
  );
}

export default App;
