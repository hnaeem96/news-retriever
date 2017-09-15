import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getNews } from '../../actions/index';
import NewsItem from '../NewsItem';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] }
  }

  componentDidMount() {
    this.props.getNews();
  }

  renderNews() {
    return _.map(this.props.news, article => {
      // return (
      //   <Link to={`/${article.id}`} key={`${article.id}-${article.publishedAt}`}>
      //     <li className="news-block">
      //       <div className="img-row">
      //         <img className="article-img" src={article.urlToImage} alt={article.urlToImage}/>
      //       </div>
      //       <div className="details-row">
      //         <h4 className="article">{article.title}</h4>
      //         <span className="author">{article.author}</span>
      //       </div>
      //     </li>
      //   </Link>
      // );
      return (
        <NewsItem
          id={article.id}
          publishedAt={article.publishedAt}
          urlToImage={article.urlToImage}
          title={article.title}
          author={article.author}
          key={`${article.id}-${article.publishedAt}`}
        />
      );
    });
  }

  render() {
    return (
      <div className="news">
        <h1 className="news-title">NY Magazine News</h1>
        <div className="container">
          <ul className="news-list">
            {this.renderNews()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news};
}

export default connect(mapStateToProps, { getNews })(App);
