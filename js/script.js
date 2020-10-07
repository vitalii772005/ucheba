'use strict' 
/**  */
const numberOfilms = +prompt('Сколько фильмов вы уже посмотрели','');
//создаем обект
const personalObjert ={

    count: numberOfilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};

//const a = prompt('Один из просмотренных последних фильмов?',''),
//      B = prompt('На сколько оцените его',''),
//      c = prompt('Один из просмотренных последних фильмов?',''),
//      d = prompt('На сколько оцените его','');

     // personalObjert.movies[a] = B;
     // personalObjert.movies[c] = d;

      for (let i=0; i<2; i++) {
        const a = prompt('Один из просмотренных последних фильмов?',''),
              b = prompt('На сколько оцените его','');
               //пустые ковычки - пустое поле (нажал ок не вводя ничего), a.length - длина 
              //null пользователь нажал отмену
              if (a != null && b != null && a != "" && b !="" && a.length < 50)  {
                personalObjert.movies[a] = b;
                console.log(personalObjert);
               }  else  {
                 console.log('error');     
                 i--;
                }
              
          if ()
     }


//const num = 6;
//(num===6) ? console.log ('ok') : console.log('error');

