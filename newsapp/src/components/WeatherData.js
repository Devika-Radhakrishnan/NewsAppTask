import React from 'react'
import AnimatedWeather from 'react-animated-weather'
// Weather information component
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 50,
    animate: true
};
// switch condition to show the animated weathericon
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
                    {/* Weather details  */}
                   <h4 className="text-white font-text">{props.weatherName}</h4>
                </div>
               <div className="col-8">
               <div className="container margin-content">
                <div className="d-flex flex-wrap ">
                <div className="text-white fs-size"><strong>Humidity-</strong></div>
                <div className="text-white fs-size ml-auto">{props.humidity}%</div>
                </div>
                <div className="d-flex col-10 py-2">
                        <div className="text-white fs-size" ><strong>Visiblity-</strong></div>
                        <div className="text-white fs-size ml-auto">{props.visiblity} mi</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white fs-size"><strong>Wind Speed-</strong></div>
                        <div className="text-white fs-size ml-auto">{props.windSpeed} Km/h</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white fs-size"><strong>Feels Like-</strong></div>
                        <div className="text-white  fs-size ml-auto">{props.feelsLike}°C</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white fs-size"><strong>Max Temp-</strong></div>
                        <div className="text-white fs-size ml-auto">{props.maxTemp}°C</div>
                    </div>
                    </div></div>     
                </div>
                       
             
            </div>

        </React.Fragment>
    )
}


export default WeatherData;
