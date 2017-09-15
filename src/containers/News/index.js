import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/index';
import NewsItem from '../../components/NewsItem';

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
