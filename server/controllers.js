var Article = require('../models/savedArticles');
var favoriteArticle = require('../models/favoritedArticles');

//GET NEWS ARTICLES
exports.get_news = (req, res) => {
  const apiLink = "https://newsapi.org/v1/articles?source=new-york-magazine&sortBy=latest&";
  const apiKey = "apiKey=f94af955c4f34286b10ef5d739f4e980";
  const url = apiLink + apiKey;

  const request = https.get(url, (response) => {
    let body = "";
    response.on('data', (data) => {
      body += data;
    });
    response.on('end', () => {
      res.send(JSON.parse(body));
    });
  });
  request.on('error', (e) => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
}

//SAVED
exports.get_saved_articles = (req, res) => {
  Article.find((err, savedArticles) => {
    if (err) {
      res.send(err);
    }

    res.json(savedArticles);
  });
};

exports.add_to_saved_articles = (req, res) => {
  var saveArticle = new Article();
  const { author, title, description, url, urlToImage, publishedAt, id } = req.body;

  saveArticle.author = author;
  saveArticle.title = title;
  saveArticle.description = description;
  saveArticle.url = url;
  saveArticle.urlToImage = urlToImage;
  saveArticle.publishedAt = publishedAt;
  saveArticle.id = id;

  saveArticle.save(function(err) {
    if (err) {
      res.send(err);
    }

    res.json({message: "Article succssfully saved"});
  });
}

exports.check_saved_articles = (req, res) => {
  Article.find({ publishedAt: req.body.publishedAt }).exec((err, article) => {
    if (err) {
      res.send(err);
    }

    res.json(article);
  });
}

exports.delete_from_saved_articles = (req, res) => {
  Article.find({ publishedAt: req.body.publishedAt }).remove().exec((err, data) => {
    if (err) {
      res.send(err);
    }

    res.json({message: `Removed ${data} article`});
  });
}

//FAVORITES
exports.get_favorite_articles = (req, res) => {
  favoriteArticle.find((err, favoritedArticle) => {
    if (err) {
      res.send(err);
    }

    res.json(favoritedArticle);
  });
}

exports.add_to_favorite_articles = (req, res) => {
  var favorite = new favoriteArticle();
  const { author, title, description, url, urlToImage, publishedAt, id } = req.body;
  favorite.author = author;
  favorite.title = title;
  favorite.description = description;
  favorite.url = url;
  favorite.urlToImage = urlToImage;
  favorite.publishedAt = publishedAt;
  favorite.id = id;

  favorite.save(function(err) {
    if (err) {
      res.send(err);
    }

    res.json({message: "Article succssfully added to favorites"});
  });
}

exports.check_favorite_articles = (req, res) => {
  favoriteArticle.find({ publishedAt: req.body.publishedAt }).exec((err, article) => {
    if (err) {
      res.send(err);
    }

    res.json(article);
  });
}

exports.delete_from_favorite_articles = (req, res) => {
  favoriteArticle.find({ publishedAt: req.body.publishedAt }).remove().exec((err, data) => {
    if (err) {
      res.send(err);
    }

    res.json({message: `Removed ${data} article`});
  });
}
