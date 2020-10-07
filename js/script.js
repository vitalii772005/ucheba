'use strict' 
/**  */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';



let numberOfilms;
function start (){
  numberOfilms =   +prompt('Сколько фильмов вы уже посмотрели','');
  while (numberOfilms == ''||numberOfilms == null || isNaN(numberOfilms)){
  numberOfilms =   +prompt('Сколько фильмов вы уже посмотрели','');
  }
}
start();

const personalObjert ={
    
    count: numberOfilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};

function showMyDB (hidden) {  // не пойму
  if (!hidden){
   console.log(personalObjert);
  }
}
showMyDB(personalObjert.private);


function writeYourGenres() {
   for (let i =1; i<=3; i++){
       const vit = prompt(`Ваш любимый жанр под номером ${i}`);
       personalObjert.genres[i-1]=vit;
   }
}
writeYourGenres();


function MemberFilms(){
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
     }
    }
    MemberFilms();

   
//const num = 6;
//(num===6) ? console.log ('ok') : console.log('error');

