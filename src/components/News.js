import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Hub - Top Head Lines</h2>
        <div className="col-md-3">
          <NewsItem title="mytitle" description="my desc" />
        </div>
        <div className="col-md-3">
          <NewsItem title="mytitle" description="my desc" />
        </div>
        <div className="col-md-3">
          <NewsItem title="mytitle" description="my desc" />
        </div>
        
      </div>
    );
  }
}

export default News;
