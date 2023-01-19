"use strict";

let numberOfFilms;

const start = () => {
   do {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
   } while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms));
};

start();

const personalMoovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const rememberMyFilms = () => {
   for (let i = 0; i < 2; i++){
      let a = prompt('Один из последних просмотренных фильмов?');
      let b = prompt('На сколько оцените его?');
      if (a.length > 50 || a === null || b === null || b.length <= 0 || a.length <= 0) {
         i--;
         continue;
      }
      personalMoovieDB.movies[a] = b;
   }
};

rememberMyFilms();

const detectPersonalLevel = () => {
   if (personalMoovieDB.count < 10 && personalMoovieDB.count > 0) {
      console.log('Просмотренно довольно мало фильмов');
   }else if (personalMoovieDB.count >= 10 && personalMoovieDB.count <= 30) {
      console.log('Вы классический зритель');
   }else if(personalMoovieDB.count > 20) {
      console.log('Вы киноман');
   }else {
      console.log('Произошла ошибка');
   }
};

detectPersonalLevel();

const showMyDB = () => {
   if(!personalMoovieDB.privat){
      console.log(personalMoovieDB);
   } 
};

showMyDB();

const writeYourGenres = () => {
   for( let i = 1; i < 4; i++){
      personalMoovieDB.genres[i - 1]  = prompt(`Ваш любимий жанр под номером ${i}`);
   }
};

writeYourGenres();

