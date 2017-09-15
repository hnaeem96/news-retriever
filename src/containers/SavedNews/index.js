import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedNews, removeFromSaved } from '../../actions/index';

import './style.css';

class SavedNews extends Component {
  constructor(props) {
    super(props);
    this.state = { savedNews: [] };
  }

  componentDidMount() {
    this.props.getSavedNews();
  }

  removeNews(article) {
    this.props.removeFromSaved(article);
    window.location.reload();
  }

  renderSavedNews() {
    return _.map(this.props.savedNews, article => {
      return (
        <div className="db-block" key={`${article.id}-${article.publishedAt}`}>
          <a target="_blank" href={article.url}>
            <li className="news-block">
              <div className="img-row">
                <img className="article-img" src={article.urlToImage} alt={article.urlToImage}/>
              </div>
              <div className="details-row">
                <h4 className="article">{article.title}</h4>
                <span className="author">{article.author}</span>
              </div>
            </li>
          </a>
          <button className="btn remove-btn" onClick={() => this.removeNews(article)}>Remove</button>
        </div>
      );
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="news">
        <h1 className="news-title">Saved News</h1>
        <div className="container">
          <ul className="news-list">
            {this.renderSavedNews()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { savedNews: state.savedNews}
}

export default connect(mapStateToProps, { getSavedNews, removeFromSaved })(SavedNews);
