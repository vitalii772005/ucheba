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
// кол бэк функция, позволяет запускать очередной код только после предыдущего кода
function learnJS(leng, callback){
         console.log(`Я учу: ${leng}`)
         callback();
};

function done(){
      console.log('Я прошел этот урок');
};


learnJS("Javascript", done);


//создание обьекта и работа с ним
const newJS = {
  name: 'Javascript',
  height:1024,
  colors:{
    border:'black',
    bg: 'blue'
  },
  makeTest: function sss(){
    console.log('test');
   }
}
newJS.makeTest();

const  {border, bg} = newJS.colors;  //деструктуризация объекта
    console.log(border);

console.log(Object.keys(newJS).length);
console.log(newJS['colors']);








/*
for (let key in newJS){  //получаю перебор объекта в значение key
    if(typeof(newJS[key])==='object' ){
    for (let i in newJS[key]){
    console.log(`Свойство ${i} имеет значение ${newJS[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${newJS[key]}`);
  }
}
*/
