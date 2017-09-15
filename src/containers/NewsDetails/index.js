import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getNewsDetails, saveNewsToDatabase, checkInSaved, saveToFavorites, checkInFavorites } from '../../actions/index';

import './style.css';

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: 0,
      checkedInSaved: 'False',
      favorited: 0,
      checkedInFavorited: 'False',
      ranSaveFunction: 'False',
      ranFavFunction: 'False'
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.getNewsDetails(id);
  }

  componentDidUpdate() {
    const { news } = this.props;
    const { id } = this.props.params;

    if (this.state.checkedInSaved === 'False' && news) {
      this.props.checkInSaved(news[id - 1]);
      this.setState({checkedInSaved: 'True'});

      setTimeout(() => {
        if (this.props.savedNews.length < 1 ) {
          this.setState({ saved: 0 });
        } else {
          this.setState({ saved: 1 });
        }
        this.setState({ranSaveFunction: 'True'});
      }, 1500);
    }

    if (this.state.checkedInFavorited === 'False' && news) {
      this.props.checkInFavorites(news[id - 1]);
      this.setState({checkedInFavorited: 'True'});

      setTimeout(() => {
        if (this.props.favoriteNews.length < 1 ) {
          this.setState({ favorited: 0 });
        } else {
          this.setState({ favorited: 1 });
        }
        this.setState({ranFavFunction: 'True'});
      }, 1500);
    }
  }

  saveNews(article) {
    this.props.saveNewsToDatabase(article);
    this.setState({ saved: 1 });
  }

  favoriteNews(article) {
    this.props.saveToFavorites(article);
    this.setState({ favorited: 1 });
  }

  render() {
    const { news } = this.props;
    if (!news) {
      return (<div>Loading...</div>);
    }

    const newsId = (this.props.params.id - 1)
    const article = news[newsId]
    return (
      <div>
        <Link className="go-back" to="/">&#x2190; Go Back</Link>
        <div className="article-content">
          <div className="article-details">
            <h1 className="article-title">{article.title}</h1>
            <img className="article-image" src={article.urlToImage} alt={article.urlToImage}/>
            <p className="article-description">{article.description}</p>
            <div className="article-author">{article.author}</div>
            <hr />
            {
              (this.state.ranSaveFunction === 'True' && this.state.ranFavFunction === 'True')?
              <div className="buttons-row">
                <a className="btn" target="_blank" href={article.url}>Read More</a>
                {
                  this.state.saved === 0 ?
                  <button className="btn" onClick={() => this.saveNews(article)}>Save</button> : null
                }
                {
                  this.state.favorited === 0 ?
                  <button className="btn" onClick={() => this.favoriteNews(article)}>Favorite</button> : null
                }
              </div> :
              <div>Loading...</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { news, savedNews, favoriteNews } = state;
  return {
    news: news['undefined'],
    savedNews,
    favoriteNews
  };
}

export default connect(mapStateToProps, { getNewsDetails, saveNewsToDatabase, saveToFavorites, checkInSaved, checkInFavorites })(NewsDetails);
