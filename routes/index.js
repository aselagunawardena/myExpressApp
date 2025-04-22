var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Star Wars' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Star Wars' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Star Wars' });
});

module.exports = router;