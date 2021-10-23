import React, { Component } from 'react'
import NewsData from './NewsData'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">News-Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                    <NewsData title="MainTitle" description="mainDesc"/>
                    </div>
                    <div className="col-md-4">
                    <NewsData title="MainTitle" description="mainDesc"/>
                    </div>
                    <div className="col-md-4">
                    <NewsData title="MainTitle" description="mainDesc"/>
                    </div>
                </div>
              
            </div>
        )
    }
}

export default News
