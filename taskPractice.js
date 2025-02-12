'use strict';


//STRING METHODS
const str = "teSt";


console.log(str.toUpperCase());  //возводит в верхний регистр
console.log(str.toLowerCase());  //возводит в нижний регистр
console.log(str);
console.log(str.trim()) // вырезает из строки все знаки пробелов;

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));// выводит индекс укзазанного символа строки

const logg = "Hello world";

console.log(logg.slice(6, 11)); // отрезает часть строки по указанному диапазону, может работать с отрицательными значениями

console.log(logg.substring(6, 11));// тоже что и silce но не поддерживает отрицательные значения

console.log(logg.substr(6, 5));// как и предыдущие, только второй аргумент указывает количество вырезаемых символов

/////


//NUMBER METHODS

const num = 12.2;
console.log(Math.round(num));  //округляет чисто до ближайщего целого

const test = "12.2px";
console.log(parseInt(test)); // переводит тип данных в number отрезая все кроме целого числа, не округляет.
console.log(parseFloat(test)); //переводит тип данных в number сохраняя дробное значение, не округляет.



