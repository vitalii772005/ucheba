'use strict';

let num = 50; //глобальная переменная, используется за пределами функции
function showFirstMessage (text){   //в скобках аргументы, которые использует внутри себя
    console.log(text);
    num = 40;
  //  let num = 20;    //переменная созданная внутри функции работает только внутри, за пределами - нет
}

showFirstMessage('hello world');
console.log(num);

function calc (a, b){
    return (a + b);   // вернуть чтото во внутренний мир
}
console.log(calc(4,8));
console.log(calc(9,10));
console.log(calc(11,10));


