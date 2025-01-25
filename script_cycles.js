'use strict';

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

// let myNum = 5;
// while (myNum <= 10) {
//     console.log(myNum);
//     myNum++;
// }


// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

for (let i = 20; i > 10; i--) {
    // if (i === 13) {
    //     break;
    // }
    console.log(i);
}



for (let i = 2; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
 
} 


for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//CYCLES INTO CYCLES

for (let i = 0; i < 3; i++) {
    console.log(i);

    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*'
    }

    result += '\n'
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        // continue;
    } else {
        console.log(i);
    }
}





let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
    console.log(i);
}


const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    console.log(i);

    arrayOfNumbers[i - 5] = i; 
}




// 5 - 5 = 5    0 + 5 = 5
// 6 - 5 = 5    1 + 5 = 6
// 7 - 5 = 5    2 + 5 = 7
// 8 - 5 = 5    3 + 5 = 8
// 9 - 5 = 5    4 + 5 = 9
// 10 - 5 = 5   5 + 5 = 10
// console.log(arrayOfNumbers);
// return arrayOfNumbers;


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];


// console.log(arr);
// result.push(...arr);
// // console.log(arr.length);
// console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
//[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]}` + ` - done`;
//     }
// }
console.log(data);




