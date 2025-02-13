'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//    a: 5,
//    b: 1
// }

// const copy = obj; //в переменную copy передается ссылка на существующий объект.

// copy.a = 10; //в этой строке модифицируется изначальный obj, а не его копия.

// console.log(copy);
// console.log(obj);

//Поверхностная копия

function copy(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
}

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

const add = {
   d: 17,
   e: 20
}


// console.log(Object.assign(numbers, add));
//Object.assign(argument1, argument2)
//записывает данные одногов объекта в другой,
//1й аргумент указывает в какой объект происходит запись, 
//2й из какого объекта записывать.

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asasasassad'
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
   one: 1,
   two: 2
}

const newObj = {...q};
newObj.two = 15;
console.log(q);
console.log(newObj);