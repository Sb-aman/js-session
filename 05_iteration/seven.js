const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);

// or
let element = 0;
function calc(myNumers){
  for(let i = 0; i < myNumers.length; i++) {
     element = myNumers[i] + 10;
    console.log(element);
  }
}
calc(myNumers);


