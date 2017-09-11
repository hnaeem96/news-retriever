const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoritedArticles = new Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  id: Number
});

var favoriteArticle = mongoose.model('favoriteArticle', favoritedArticles);
module.exports = favoriteArticle;
