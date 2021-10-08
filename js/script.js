"use strict";

const numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 0; i < 2; i++) {
  const a = prompt('Один з переглянутих фільмів?', '');
  const b = prompt('Яка оцінка фільму?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('DONE!');
  } else {
    console.log('ERROR!')
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Переглянуто дуже мало фільмів!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Ви чудовий телеглядач!');
} else if (personalMovieDB.count > 30) {
  console.log('Ви кіноман!');
} else {
  console.log('Виникла помилка!')
}

console.log(personalMovieDB);