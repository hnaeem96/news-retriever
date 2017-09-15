import React, { Component } from 'react';

import './style.css';

class NewsDetailsItem extends Component {
  render() {
    return (
      <div>
        <h1 className="article-title">{this.props.title}</h1>
        <img className="article-image" src={this.props.urlToImage} alt={this.props.urlToImage}/>
        <p className="article-description">{this.props.description}</p>
        <div className="article-author">{this.props.author}</div>
      </div>
    );
  }
}

export default NewsDetailsItem;
