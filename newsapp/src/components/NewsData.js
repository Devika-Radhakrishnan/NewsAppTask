import React, { Component } from 'react'

export class NewsData extends Component {
   
    
    render() {
      let {title,description,imageUrl,newsUrl,author,date}=this.props;
        return (
            <div className="my-3">
                <h2>News Data </h2>
                <div className="card" >
                    <img src={imageUrl!=='null'?imageUrl:"https://images.cnbctv18.com/wp-content/uploads/2021/08/icici-1019x573.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted"> Author: {author?author:"Unknown"}<br></br>Published On: {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary" rel="noopener noreferrer"   target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsData
