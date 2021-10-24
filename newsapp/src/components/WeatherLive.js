import React, { Component } from 'react'

export class WeatherLive extends Component {
    componentDidMount(){
       //popup for allow location and will get the coordinates
        navigator.geolocation.getCurrentPosition(function(position){
console.log(position.coords);
        })

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
