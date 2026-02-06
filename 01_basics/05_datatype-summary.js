

// Primitive 
//  7 types : String , number , boolean , null ,undefined ,Symbol ,BigInt


const value = 34;
const storevalue =  10.353

const isLoggedIn = false // ye boolean use karne ke liye hota h 
const outsideTemp = null

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);   // ye false hi dega

const bigNumber  = 12344667889956677n  // n means bog number ban jayega

// Reference (non primitive)

// array ,objects, function

const heros = ["shaktiman" ,"dos" , "bheem"]  // Arays declaration
console.log(heros);

  let myObj =  {
    name : "aman",
    age: 16  ,            // curly braces ke andar jitni bhi value hoti h wo object hoti h 
    city : "rewa" 

}
console.log(myObj);


// function
let myFunction = function(){
    console.log("hello world");
    }


    console.log(typeof myObj);
    console.log(typeof heros);
    
    
    /* basically funtction ka typeof me return object funtio milta h 
    or sbhi non primitive ka type of function milta h */

    // Stack (Primitive) , Heap(Non-prmimitive)

    let MyName = "aman"


    let anotherName = MyName
    anotherName = "akash"   // kynki stack me copy pass hoti h isliye value change ho skti h

    console.log(MyName);
    console.log(anotherName);

    let userOne = {
      name: "raj",
      email : "raj123@gmail,com"
    }

    let userTwo = userOne;
         userTwo.email = "rajiya@345gmail.com" // heap reference leta h isliye value hange ho jayegi dono jagah


    console.log(userOne);
    console.log(userTwo);
    

  console.log(userOne.email);
  console.log(userTwo.email);
  
    
    
    