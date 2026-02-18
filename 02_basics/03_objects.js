// singleton
// Object.create  --> is tarah likhenge to singleton ban jayega

// object literals

const obj = {
    name: "harry",
    section: "A",
    "full name": "Harry Potter",
    class: 12,

}
console.log(obj.name);

// or
console.log(obj["name"]);
// console.log(obj.full name); // is tarah likhenge to error aayega kyuki full name me space hai

// or
// console.log(obj["full name"]); --> string wale ko likhna h to (obj[" variable name"] ke andar likhna hoga

let symb = Symbol("this is a symbol"); // --> symbol ek unique value create karta hai
// console.log(typeof obj.symb);


// const mySym = Symbol("key1")
/*

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// kisi object ko freeze karna h to Object.freeze() method ka use karte h

JsUser.email = "aman@chatgt.com"
console.log(JsUser);

Object.freeze(JsUser)
JsUser.email = "aman@google.com"
console.log(JsUser); // ab email change nahi hoga kyuki object freeze ho chuka hai


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/





/*
const obj1 = {
    a: "1" , b : "2"
}
// console.log(obj1);
const obj2 = {
    c : "3" , d: "4"
}
// jaise inko merge karna h to iske liye

const obj3 = Object.assign({} , obj1 ,obj2) // ye badhiya tarika h merge karne ka 
console.log(obj3);
*/


const target = { a: "1", b: "2" }
const source = { c: "3", d: "4" }

const returnedTarget = Object.assign(target, source) // ye bhi merge kar dega lekin target object ko change kar dega

console.log(target);
console.log(returnedTarget === target);


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obc1 = { 1: "a", 2: "b" }
const obc2 = { 3: "a", 4: "b" }
const obc4 = { 5: "a", 6: "b" }

// const obc3 = { obc1, obc2 }
// const obc3 = Object.assign({}, obc1, obc2, obc4)



const obj3 = { ...obj1, ...obj2 }  // ye apna spread method  bhi merge karne ke liye
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  --> means jo heading h wi dega array ke form me
// console.log(Object.values(tinderUser));  --> means jo values h wo dega array ke form me
// console.log(Object.entries(tinderUser));   ---> isme sbki value array ke andar aa jayegi

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  --> simply agar ye property mil gayi to true else false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course  // instructor ye alias h iske andar courseInstructor ki value aa jayegi
// console.log(courseInstructor);
console.log(instructor);


// YE API KA CONCEPT HAI JISME HUM API SE DATA LEKAR USKO OBJECT ME STORE KARTE HAI
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",   // ESE ISTARAH KAR SKTE H 
//     "price": "free"
// }

[
    {},
    {},   // EK ARRAY KE FORM ME OBJECTS BHI HOTE HAI JISME HUM API SE DATA LEKAR USKO STORE KARTE HAI
    {}
]


// JARURI NHI H KI API H TO SIRF OBJECSTS BAS MILEGA ARRAYS OF OBJECTS BHI MIL SKTA HAI
