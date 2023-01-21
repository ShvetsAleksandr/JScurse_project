"use strict";

const personalMoovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   
   start: () => {
      let result = prompt('Сколько фильмов вы уже посмотрели?');
      
      while(result === null || result.trim() === '' || isNaN(result) || parseInt(result) < 0) {
         result = prompt('Сколько фильмов вы уже посмотрели?');
      }
      personalMoovieDB.count = result.trim();
   },

   rememberMyFilms: () => {
      for (let i = 0; i < 2; i++){
         let a = prompt('Один из последних просмотренных фильмов?');
         let b = prompt('На сколько оцените его?');
         if (a === null || b === null || a.length > 50 || b.trim().length === 0 || a.trim().length === 0) {
            i--;
            continue;
         }
         personalMoovieDB.movies[a.trim()] = b.trim();
      }
   },

   detectPersonalLevel: () => {
      if (personalMoovieDB.count < 10 && personalMoovieDB.count > 0) {
         console.log('Просмотренно довольно мало фильмов');
      }else if (personalMoovieDB.count >= 10 && personalMoovieDB.count <= 30) {
         console.log('Вы классический зритель');
      }else if(personalMoovieDB.count > 20) {
         console.log('Вы киноман');
      }else {
         console.log('Произошла ошибка');
      }
   },

   showMyDB: () => {
      if(!personalMoovieDB.privat){
         console.log(personalMoovieDB);
      } 
   },

   writeYourGenres: () => {
      for( let i = 1; i < 4; i++){
         let genre = prompt(`Ваш любимий жанр под номером ${i}`);
         if (genre === null || genre.trim().length === 0) {
            i--;
            continue;
         }
         personalMoovieDB.genres[i - 1] = genre;
      }

      personalMoovieDB.genres.forEach( (el, index) => console.log(`Любимый жанр #${index + 1} - это ${el}`));
   },

   toggleVisibleMyDB: () => {
      if (personalMoovieDB.privat){
         personalMoovieDB.privat = false;
      }else{
         personalMoovieDB.privat = true;
      }
   },
};

personalMoovieDB.writeYourGenres();