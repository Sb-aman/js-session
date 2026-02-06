let  score = "34"

console.log(typeof score);

// or
console.log(typeof (score));


let valueInNumber = Number(score);  // agar number nhi milega to (NaN --> not a nnumber) milega
console.log(typeof valueInNumber);  // --> ye number ho jayega


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true



let value = 3
let negValue = -value;
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");   

/* Rule : if start with string then all will be string
        : if start with number then this will add 
        : simply check the first condition
        */

// console.log( (3 + 4) * 5 % 3);


// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion