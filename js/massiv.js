'use strict'
    const arr = [11, 23, 3, 16, 8];
   // arr.sort(); будет строковая сортировка
    arr.sort(sortNunber); // сортировка числовая через функцию
    console.log(arr);
    function sortNunber(a, b){
        return a-b;
    }
  //  arr.pop(); удаляет последний элемент в массиве
  //    arr.push(15); вставляет новый элемент к концу

  // главный принцип перебора
arr.forEach(function(znachenie, i, arr){ // состоит из трех аргументов 1. само значение 2. № пп, сам массив
    console.log(`${i}: ${znachenie} внутри массива ${arr}`)
})


   // 1 вариант перебора
  for (i=0; i<arr.length;i++){
      console.log(arr[i]);
  }
  // 2 вариант перебора
 for (let perebor of arr){
     console.log(perebor)
 }