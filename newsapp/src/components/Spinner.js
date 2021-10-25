import React, { Component } from 'react'
import loading from './loader.gif'
// Spinner/loader component
export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
