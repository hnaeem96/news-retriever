import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavoritedNews, removeFromFavorites } from '../../actions/index';

import './style.css';

class FavoriteNews extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteNews: [] };
  }

  componentDidMount() {
    this.props.getFavoritedNews();
  }

  removeNews(article) {
    this.props.removeFromFavorites(article);
    window.location.reload();
  }

  renderFavoritedNews() {
    return _.map(this.props.favoritedNews, article => {
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
        <h1 className="news-title">Favorites</h1>
        <div className="container">
          <ul className="news-list">
            {this.renderFavoritedNews()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { favoritedNews: state.favoriteNews}
}

export default connect(mapStateToProps, { getFavoritedNews, removeFromFavorites })(FavoriteNews);
