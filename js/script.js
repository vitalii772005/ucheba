

const numberOfilms = +prompt('Сколько фильмов вы уже посмотрели','');
//создаем обект
const personalObjert ={

    count: numberOfilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};

const a = prompt('Один из просмотренных последних фильмов?',''),
      B = prompt('На сколько оцените его',''),
      c = prompt('Один из просмотренных последних фильмов?',''),
      d = prompt('На сколько оцените его','');

      personalObjert.movies[a] = B;
      personalObjert.movies[c] = d;
      console.log(personalObjert);

