let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMoovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

let allreadyWatchedFilms = +prompt('Один из последних просмотренных фильмов?');
let raiting = prompt('На сколько оцените его?');

personalMoovieDB.movies[allreadyWatchedFilms] = raiting;