'use strict';


//IF (ELSE)
if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error!");
}



if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("Много");
}  else {
    console.log("Ok!");
}

//Тернарный оператор
(num === 50) ? console.log("Ok!") : console.log("error");



//Switch
const num = 50;

switch (num) {
    case 49: 
        console.log("error");
        break;
    case 100: 
        console.log("error");
        break;    
    case 50: 
        console.log("OK");
        break;
    default:
        console.log("нет верного ответа");
        break;
}



//LOGICAL OPERATORS

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log( 5 === 5 && 3 > 1 || 5);





let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

console.log(hamburger && cola || fries === 3 && nuggets);
