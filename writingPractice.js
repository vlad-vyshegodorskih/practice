'use strict';


//IF (ELSE)
// if (4 == 9) {
//     console.log("Ok!");
// } else {
//     console.log("Error!");
// }



// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log("Много");
// }  else {
//     console.log("Ok!");
// }

//Тернарный оператор
// (num === 50) ? console.log("Ok!") : console.log("error");



//Switch
// const num = 50;

// switch (num) {
//     case 49: 
//         console.log("error");
//         break;
//     case 100: 
//         console.log("error");
//         break;    
//     case 50: 
//         console.log("OK");
//         break;
//     default:
//         console.log("нет верного ответа");
//         break;
// }



//LOGICAL OPERATORS

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log( 5 === 5 && 3 > 1 || 5);






// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }
// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
    
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
                
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
            
//         }
        
//     }
// }



// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2;

// while (i <= 16) {
   
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     // i++;
// }


//FUNCTIONS
