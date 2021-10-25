import React, { Component } from 'react'

export class NewsData extends Component {
   
    
    render() {
      let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            // News Details Section
            <div className="my-3 container">
                <div className="row">
                {/* <h2>News Data </h2> */}
                <div className="card " >
                <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zindex:'1'}}>
                       {source }
                       </span>
                    <img className="my-3" src={imageUrl?imageUrl:"https://images.cnbctv18.com/wp-content/uploads/2021/08/icici-1019x573.jpg"} alt="..." />
                    <div className="card-body">
               
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text mb-10"><small className="text-danger"> Author: {author?author:"Unknown"}<br></br>Published On:{new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary" rel="noopener noreferrer"   target="_blank">Read More</a>
                    </div>
                </div>
                </div>
            </div>
           
        )
    }
}

export default NewsData
