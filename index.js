var _ = require('lodash');
var movieData = require('./movies.json')

//movies before 1990 with imdb rating > 8.7

var popularOldies = _.filter(movieData, (movie) => movie.year < 1990 && movie.imdbRating > 8.7);
var popularOldiesTitles = popularOldies.map((movie) => movie.originalTitle);
// console.log(popularOldiesTitles)


//holy shit just act like youre typing I bet 
//keep tdsoidng tyhatnfdont eracvnasd fsd fdgha; kakerutkldadsfa klhgoa
//fkjdskfah nvfjdgha  nreit asdlkgfnj

var travotaMovies = _.filter(movieData, (movie) => {
    return _.find(movie.actors, (actor) => actor === 'John Travolta')
})

// * do any movies starring John Travolta in 1994


// * Get me list of distinct actors


var allActors = _.pluck(movieData, 'actor');