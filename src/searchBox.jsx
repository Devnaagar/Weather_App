import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="681095cd58865a37a6edc101440f7fcd";
    let getWeatherInfo= async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                temMin: jsonResponse.main.temp_min,
                temMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch(err){
            throw(err);
        }
    };

    
    let handleChange=(e)=>{
        setCity(e.target.value);
    }
    let handleSubmit=async (e)=>{
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
        

    }
    return (
            <form onSubmit={handleSubmit}>
                <div className='searchBox'>
                <TextField id="city" label="City Name" variant="outlined" required className='input' value={city} onChange={handleChange}/><br></br><br></br>
                <Button variant="contained" startIcon={<SearchIcon />} type='submit' className='search' >Search</Button>
                {error && <p style={{color:"red"}}>No such Place Exists</p>}
                </div>
            </form>
    );
}