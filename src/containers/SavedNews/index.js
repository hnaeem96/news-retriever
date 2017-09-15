import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedNews, removeFromSaved } from '../../actions/index';
import SavedNewsItem from '../../components/SavedNewsItem';

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
          <SavedNewsItem
            url={article.url}
            urlToImage={article.urlToImage}
            title={article.title}
            author={article.author}
          />
          <button className="btn remove-btn" onClick={() => this.removeNews(article)}>Remove</button>
        </div>
      );
    })
  }

  render() {
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
