'use strict';

// const obj = new Object();

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function () {
      console.log("Test");
   }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
console.log(bg);

console.log(Object.keys(options).length); //выводит в консоль количество ключей объекта
console.log(Object.keys(options["colors"]).length); //выводит в консоль количество ключей дочернего объекта

// console.log(options["colors"]["border"]);
// delete options.name;
// console.log(options);


//задаем перменную key и в нее записываем значение ключа объекта options,
//обращаемся к ключу объекта через новую переменную ${key} 
//затем выводим значение ключа объекта через конструкцию ${options[key]},
//где в фигурных скобках указываем имя объекта options и в квадратных скобках уже через переменную key обращаемся к значение ключа объекта.
//аналогично для объекта colors стр.31, только записали значения ключей в переменную i и обратились через конструкцию ${options[key][i].

// let counter = 0;
// for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//           console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//           counter++;
//       } 
//    } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//    }
// }

console.log(counter);




