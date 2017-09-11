const express = require('express');
const path = require('path');
const https = require('https');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const apiLink = "https://newsapi.org/v1/articles?source=new-york-magazine&sortBy=latest&";
const apiKey = "apiKey=f94af955c4f34286b10ef5d739f4e980";

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jsonParser = bodyParser.json()

app.use(express.static(path.join(__dirname, 'build')));

//API Service
mongoose.connect('mongodb://localhost/NewsRetriever')
    .then(() => console.log('Connection Succesful'))
    .catch((e) => console.error(e));

//Importing collections
var Article = require('../models/savedArticles');
var favoriteArticle = require('../models/favoritedArticles');

//Using Routes
const router = express.Router();

app.use('/api/test', router);
app.use('/api/saved', router);
app.use('/api/saved/check', router);
app.use('/api/saved/delete', router);
app.use('/api/favorites', router);
app.use('/api/favorites/check', router);
app.use('/api/favorites/delete', router);


//Get all saved articles
app.get('/api/saved', (req, res) => {
  Article.find((err, savedArticles) => {
    if (err) {
      res.send(err);
    }

    res.json(savedArticles);
  });
});

//Check for article
app.post('/api/saved/check', jsonParser, (req, res) => {
  Article.find({ publishedAt: req.body.publishedAt }).exec((err, article) => {
    if (err) {
      res.send(err);
    }

    res.json(article);
  });
});

//Delete article
app.post('/api/saved/delete', jsonParser, (req, res) => {
  Article.find({ publishedAt: req.body.publishedAt }).remove().exec((err, data) => {
    if (err) {
      res.send(err);
    }

    res.json({message: `Removed ${data} article`});
  });
});

//Add article to saved
app.post('/api/saved', jsonParser, (req, res) => {
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
});

//Get all favorited articles
app.get('/api/favorites', (req, res) => {
  favoriteArticle.find((err, favoritedArticle) => {
    if (err) {
      res.send(err);
    }

    res.json(favoritedArticle);
  });
});

//Check for article
app.post('/api/favorites/check', jsonParser, (req, res) => {
  favoriteArticle.find({ publishedAt: req.body.publishedAt }).exec((err, article) => {
    if (err) {
      res.send(err);
    }

    res.json(article);
  });
});

//Delete article
app.post('/api/favorites/delete', jsonParser, (req, res) => {
  favoriteArticle.find({ publishedAt: req.body.publishedAt }).remove().exec((err, data) => {
    if (err) {
      res.send(err);
    }

    res.json({message: `Removed ${data} article`});
  });
});

//Add article to favorites
app.post('/api/favorites', jsonParser, (req, res) => {
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
});

//News API Request
app.get('/api/news', (req, res) => {
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
});

// Always returninig index.html, so react does its thing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'build/index.html'));
});

module.exports = app;
