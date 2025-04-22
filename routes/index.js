var express = require('express');
var router = express.Router();
var db = require('../database'); // Import the database connection

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Star Wars' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Star Wars' });
});

/* GET comments page. */
router.get('/comments', function(req, res, next) {
  // Fetch all comments from the database
  db.all('SELECT * FROM comments ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.render('comments', { title: 'Comments', comments: [] });
    } else {
      res.render('comments', { title: 'Comments', comments: rows });
    }
  });
});

/* POST comments page. */
router.post('/comments', function(req, res, next) {
  const { name, comment } = req.body;

  // Insert the new comment into the database
  db.run('INSERT INTO comments (name, comment) VALUES (?, ?)', [name, comment], function(err) {
    if (err) {
      console.error(err.message);
    }
    res.redirect('/comments'); // Redirect back to the comments page
  });
});

module.exports = router;