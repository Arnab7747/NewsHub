import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";

export class News extends Component {
  constructor(){
    super();
    console.log("hello")
    this.state={
      
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Hub - Top Head Lines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytitle" description="my desc"  imageUrl=""/>
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="my desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="my desc" />
          </div>
        
          
        </div>
      </div>
    );
  }
}

export default News;
