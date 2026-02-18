    // +++++++++++++++ truthy +++++++++++

    /*    const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "",'', null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// false == 0 --> true
// false == ''  --> true
// 0 == ''  --> true

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
*/

// Nullish Coalescing Operator (??): null undefined
 /* syntax 
 let result = value ?? defaultvalue
 basic rule : jab null indefined value hongi to default value call jogi
               : warna origianl value
*/
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

val4 = null?? 20 ?? 30  // ->> is tarah ke case me first value jo mil gayi h usse use kar lenge
console.log(val4);

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")