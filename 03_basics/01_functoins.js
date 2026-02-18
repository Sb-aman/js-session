

function myName(){
    console.log("anand");
    console.log("a");
    console.log("a");
    console.log("");
    console.log("a");
    console.log("anand");

    
}
// myName();
// console.log(myName());


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
addTwoNumbers(4,6)
let ans =  addTwoNumbers(7,5)
console.log("result :" , ans);


function sum(num1 ,num2){
    let result = num1 + num2

    // or 
    // return num1 + num2 // aise bhi likh skte h 
    console.log("hello"); // ye return ke niche h isliye unreachable code h  
}
console.log(sum(2,5));


function userLoggedIn(username){
    return `${username} just logged in`    //  ***** jab kbhi function me return kar rhe ho to bahar funtion ko .log me likhna  ********
}
userLoggedIn("aman")  // yad rkhna ki return karane k bad ise aise nhi likh skte log karke return karna
console.log(userLoggedIn("aman"));


function loginUserMessage(username = "sam"){ //  ye hamne default value de di h kuch bhi arguments nhi doge to by default "sam" leke chalega
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



// const { use } = require("react")





function addCartNumber(va1,val2 , ...val){  // ye spread h
    return val 
}

// console.log(addCartNumber(3,5,7,8,4,3,4,5,))  // ti ye suru ke dono values ko chonnd dega 

const obj1 = {
    name : "akay",
    age : 34
}

// ye object ko function me pass kar rhe h
function byObj(anyobject){

    return  `name is ${anyobject.name} and age is : ${anyobject.age}`
}
// console.log(byObj(obj1));



// array as a function

let newArray = [2,4,6,7,9]

function forArray(newArray){
  console.log(newArray[0]);
  console.log(newArray[1]);
  console.log(newArray[2]);
  console.log(newArray[3]);
  console.log(newArray[4]);
}

forArray(newArray);
