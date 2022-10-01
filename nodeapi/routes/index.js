var movieList = require('../moviedata/movieList');
var express = require('express');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log(movieList)
  res.send(movieList)
});

module.exports = router;
