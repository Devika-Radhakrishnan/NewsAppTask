import React, { Component } from 'react'
import NewsData from './NewsData'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9429ae74542a401197284e80a483e9f9&page=1&pageSize=15";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    handlePreviousClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9429ae74542a401197284e80a483e9f9&page=${this.state.page-1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({})
        this.setState({
            page: this.state.page - 1,
             articles: parsedData.articles 

        })
    }
    handleNextClick = async () => {
        if(this.state.page+1>Math.ceil(this.state.totalResults/15)){

        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9429ae74542a401197284e80a483e9f9&page=${this.state.page+1}&pageSize=15`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({})
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles 
            })
        }
      
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">News-Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsData title=
                                {element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/15)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
