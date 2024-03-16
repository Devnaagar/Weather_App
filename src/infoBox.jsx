import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';

export default function InfoBox({info}){
    const HOT_IMG="./src/hot.jpg";
    const COLD_IMG="./src/cold1.jpg";
    const RAIN_IMG="./src/rain.jpg";
    const DUSTY_IMG="./src/dusty.jpg";


    return(
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_IMG :info.humidity <25 ? DUSTY_IMG: info.temp> 15 ? HOT_IMG : COLD_IMG}
                    title="dusty"
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity>80 ? <WaterDropIcon/>:  info.humidity <25 ? <AirIcon/> : info.temp> 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temperature = {info.temMin}&deg;C</p>
                    <p>Max Temperature = {info.temMax}&deg;C</p>
                    <p>Weather can be described as <i>{info.weather}</i> and Feels Like = {info.feelslike}&deg;C.</p>
                    
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
}