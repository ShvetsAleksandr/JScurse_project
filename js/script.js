"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMoovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

for (let i = 0; i < 2; i++){
   let filmName = prompt('Один из последних просмотренных фильмов?');
   let yourRating = prompt('На сколько оцените его?');
   if (filmName.length > 50 || filmName === null || yourRating === null || yourRating.length <= 0 || filmName.length <= 0) {
      i--;
      continue;
   }
   personalMoovieDB.movies[filmName] = yourRating;
}

if (personalMoovieDB.count < 10 && personalMoovieDB.count > 0) {
   console.log('Просмотренно довольно мало фильмов');
}else if (personalMoovieDB.count >= 10 && personalMoovieDB.count <= 30) {
   console.log('Вы классический зритель');
}else if(personalMoovieDB.count > 20) {
   console.log('Вы киноман');
}else {
   console.log('Произошла ошибка');
}
