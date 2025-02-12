'use strict';


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage('Hello World!');


// ---------

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// ----------

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("hello!");
// };

// logger();

// // const calc = (a, b) => { return a + b };
// const calc = (a, b) => a + b; {
//     console.log('1');
//     return a + b;
// };



const usdCurr = 28;
// const eurCurr = 32;

const discount = 0.9;

function convert (amount, curr) {

    return curr * amount;
  
}

function promotion (result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    } 

    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);



function sayHello(name) {
    return `Привет, name!`;
}

sayHello('Alex');
console.log(sayHello('Alex'));



function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
   
}

returnNeighboringNumbers(1);

console.log(returnNeighboringNumbers(1));


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {

        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 3);
console.log(getMathResult(10, 3));



