/*
const name = "aman shukla "
const repoCount = 50

// console.log(name + repoCount + " Value");   --> old way

console.log(`hello i am backened developer ${name} and my repo count is ${repoCount}`);  // ye bhi same op hi dega lekin modern tarika h 


const gameName = new String('aesthetic')

console.log(gameName);
console.log(gameName[3]);
console.log(gameName.__proto__) ; // ye { } dega iske andar sari value rhti h lekin dikhti nhi h 


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // substring me negative value nhi leta wo automativally positive kar dega
console.log(newString);

const anotherString = gameName.slice(-8, 4) // yha -ve value chl jyegi 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // agar ye hoga to true return kardega 

 console.log(gameName.split('-'));
 */


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));



let score = 100

// console.log( score);


let newScore = new  Number(score)
// console.log( newScore);


// console.log(score.toFixed(4));  // to fixed method number h uska means decimal ke bad itni value dega
// console.log( typeof score.toString());
// console.log(score.toString().length);  // to apan toString method se number ko string bana lenge


const nujmbering = 56724.1234  // ye value ko rounf off kar deta h 
// console.log(nujmbering.toPrecision(2));
// console.log(nujmbering.toPrecision(1));
// console.log(nujmbering.toPrecision(3));
// console.log(nujmbering.toPrecision(4));
// console.log(nujmbering.toPrecision(7));


const money = 1000000;
// console.log(money.toLocaleString());  // ye foreign bhasha me deta h value

console.log(money.toLocaleString('en-In'));  // ye Indian bhasha me deta h value



// ************************************* MATH **********************************************
console.log(Map)
console.log(Math);



// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // isme sirf 0 to 0.9 tk hi value aati h 
console.log((Math.random()*10) + 1);  // isme *10 kiya h to ek digit shift hi jayegi usme +1 kiya to 1. somthing aayega
console.log(Math.floor(Math.random()*10) + 1); // ab isme floor le liya to lowest value aayegi

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // ye isliye hi kiya taki minimum value bhi aa ske

