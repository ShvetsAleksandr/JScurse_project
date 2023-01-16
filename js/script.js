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
   let a = prompt('Один из последних просмотренных фильмов?');
   let b = prompt('На сколько оцените его?');
   if (a.length > 50 || a === null || b === null || b.length <= 0 || a.length <= 0) {
      i--;
      continue;
   }
   personalMoovieDB.movies[a] = b;
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
