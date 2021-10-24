import React, { Component } from 'react'

export class WeatherLive extends Component {
    state = {
        latitude: null,
        longitude: null,
        temp:null
    }
    //popup for allow location and will get the coordinates
    componentDidMount() {
        if (navigator.geolocation) {
            this.getPositions()
                .then((position) => {

                    this.getWeather(position.coords.latitude, position.coords.latitude);
                    // console.log(position.coords.latitude);
                    // latitude:9.9130729,longitude:10.062265
                })
        }
    }
    getPositions = () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    getWeather = async (latitude, longitude) => {
        const api =await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=017a22617c85c751218b484a4f6d61eb`
        );
        const data = await api.json();
        console.log(data);
     
    }
    render() {
        return (
            <div>
                <h1>HI THIS IS  A LIVE WEATHER PREDICTOR</h1>
            </div>
        )
    }
}

export default WeatherLive
