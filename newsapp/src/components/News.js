import React, { Component } from 'react'
import NewsData from './NewsData'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import WeatherLive from './WeatherLive';
// class component of news
export class News extends Component {
    //Default props created and default data type 
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    // Accessing api using fetch from news api
    async updateNewsData(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9429ae74542a401197284e80a483e9f9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }
    async componentDidMount() {

        this.updateNewsData();

    }
    // Button previous click
    handlePreviousClick = async () => {

        this.setState({ page: this.state.page - 1 });
        this.updateNewsData();
    }
    // Button next click
    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 });
        this.updateNewsData();

    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <h4 className="text-white text-center">Live Weather!!</h4>
                    {/* WeatherLive component displayed */}
                    <WeatherLive />
                </div>
                <div className="container my-3">
                    <h2 className="text-center" style={{ margin: '30px 0px', color: 'blue' }}>News-Top Headlines</h2>
                    {/* loader */}
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4 h-100" key={element.url}>
                                {/* news data displayed */}
                                <NewsData title=
                                    {element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default News
