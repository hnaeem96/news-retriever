const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var savedArticles = new Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  id: Number
});

var Article = mongoose.model('Article', savedArticles);
module.exports = Article;
