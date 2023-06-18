import React, { Component } from "react";

export class NewsItem extends Component {
 constructor(){
  super();
  console.log("hello ")
 }
  render() {
    let { title, description, imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={!imageUrl?"https://www.coindesk.com/resizer/C8yqxagJEupXxE6r3FGYY8q6UrM=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/BAS6BC7ICZEKNK6NMHVIHJEAFA.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
