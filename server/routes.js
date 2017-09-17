const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const controller = require('./controllers');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const jsonParser = bodyParser.json()

//API Service
mongoose.connect('mongodb://localhost/NewsRetriever')
    .then(() => console.log('Connection Succesful'))
    .catch((e) => console.error(e));

router.get('/api/news', controller.get_news);

router.get('/api/saved', controller.get_saved_articles);
router.post('/api/saved', jsonParser, controller.add_to_saved_articles);
router.post('/api/saved/check', jsonParser, controller.check_saved_articles);
router.post('/api/saved/delete', jsonParser, controller.delete_from_saved_articles);

router.get('/api/favorites', controller.get_favorite_articles);
router.post('/api/favorites', jsonParser, controller.add_to_favorite_articles);
router.post('/api/favorites/check', jsonParser, controller.check_favorite_articles);
router.post('/api/favorites/delete', jsonParser, controller.delete_from_favorite_articles);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'build/index.html'));
});

module.exports = router;
