var express = require('express');
var request = require('request');
var router = express.Router();

/* 
GET popular movies. *
Note: by default theMoviedbAPI displays only 20 movies
per page, 

*/
router.get('/movies', function(req, res, next) {
  request('https://api.themoviedb.org/3/discover/movie?primary_release_year=2000&sort_by=vote_average.desc&api_key=2931998c3a80d7806199320f76d65298', function(error, rensponse, body){
  res.send(body)
  });
});
// Get popular tv shows
router.get('/shows', function(req, res, next) {
  request('https://api.themoviedb.org/3/tv/popular?api_key=2931998c3a80d7806199320f76d65298&language=en-US&page=1', function(error, rensponse, body){
  res.send(body)
  });
});

// Get movies in threatre
router.get('/theatre', (req, res) => {
  request('https://api.themoviedb.org/3/discover/movie?&primary_release_date.gte=2018-04-25&sort_by=popularity.desc&api_key=2931998c3a80d7806199320f76d65298' + '&page=1&include_adult=false', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});
module.exports = router;
