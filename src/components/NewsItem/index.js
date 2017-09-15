import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

class NewsItem extends Component {
  render() {
    return (
      <Link to={`/${this.props.id}`} key={`${this.props.id}-${this.props.publishedAt}`}>
        <li className="news-block">
          <div className="img-row">
            <img className="article-img" src={this.props.urlToImage} alt={this.props.urlToImage}/>
          </div>
          <div className="details-row">
            <h4 className="article">{this.props.title}</h4>
            <span className="author">{this.props.author}</span>
          </div>
        </li>
      </Link>
    );
  }
}

export default NewsItem;
