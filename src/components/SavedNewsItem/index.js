import React, { Component } from 'react';

class SavedNewsItem extends Component {
  render() {
    return (
      <a target="_blank" href={this.props.url}>
        <li className="news-block">
          <div className="img-row">
            <img className="article-img" src={this.props.urlToImage} alt={this.props.urlToImage}/>
          </div>
          <div className="details-row">
            <h4 className="article">{this.props.title}</h4>
            <span className="author">{this.props.author}</span>
          </div>
        </li>
      </a>
    );
  }
}

export default SavedNewsItem;
