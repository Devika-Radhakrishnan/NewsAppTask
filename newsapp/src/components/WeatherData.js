import React from 'react'
import AnimatedWeather from 'react-animated-weather'

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 50,
    animate: true
};
function WeatherData(props) {
    var weatherIcon = null;
    switch (props.weatherName) {
        case "Haze":
            weatherIcon = 'CLOUDY';
            break;
        case "Rain":
            weatherIcon = 'RAIN';
            break;
        case "RAIN":
            weatherIcon = 'CLOUDY';
            break;
        default:
            weatherIcon = 'CLEAR_DAY';
    }
    return (
        <React.Fragment>

            <div className="col-4 ht2-container side-bg text-center py-3">
                <div className="row">
                <div className="col-4 mt-10" >
                <AnimatedWeather 
                    icon={weatherIcon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                   <h4 className="text-white">{props.weatherName}</h4>
                </div>
               <div className="col-8">
               <div className="container margin-content">
                <div className="d-flex flex-wrap ">
                <div className="text-white fs-6"><strong>Humidity-</strong></div>
                <div className="text-white fs-6 ml-auto">{props.humidity}%</div>
                </div>
                <div className="d-flex col-10 py-2">
                        <div className="text-white fs-6" ><strong>Visiblity-</strong></div>
                        <div className="text-white fs-6 ml-auto">{props.visiblity} mi</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white fs-6"><strong>Wind Speed-</strong></div>
                        <div className="text-white fs-6 ml-auto">{props.windSpeed} Km/h</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white fs-6"><strong>Feels Like-</strong></div>
                        <div className="text-white  fs-6 ml-auto">{props.feelsLike}°C</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white fs-6"><strong>Max Temp-</strong></div>
                        <div className="text-white fs-6 ml-auto">{props.maxTemp}°C</div>
                    </div>
                    </div></div>     
                </div>
                       
             
            </div>

        </React.Fragment>
    )
}


export default WeatherData;
