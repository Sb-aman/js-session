const numer = [1,2,3,4,5]
// console.log(numer);

numer.push(6)  // push add karne ke liye hotah 
numer.push(7)
// console.log(numer);

numer.pop(7)  // pop delete karne ke liye h 
numer.pop(6)
// console.log(numer);

// console.log(numer[3]);


numer.shift() // ye automatically aift kar deta h ek position
// console.log(numer);

numer.unshift(9) // to ye 1st position element ko remve karke given element ko add kar deta h 
// console.log(numer);


const arrOne = [1,2,3,4,5]
// console.log( typeof "A : " + arrOne);

const arrTwo = arrOne.slice(2,4)
// console.log( typeof "B : " + arrTwo);

const arrThree = arrOne.splice(1,3)
// console.log(typeof "C : " + arrThree);