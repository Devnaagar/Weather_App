import { useState } from 'react';
import InfoBox from './infoBox.jsx';
import SearchBox from './searchBox.jsx';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.56,humidity:47,temMax:25.65,temMin:25.05,temp:25.64,weather:"haze"
    });

        let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
        }
    return (
        <div style={{textAlign:"center"}}>
            <h3>Weather App by Dev</h3>
            <SearchBox updateInfo={updateInfo}/>
            <br></br> <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}