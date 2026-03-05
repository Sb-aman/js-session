/* let promise  = new Promise(function(resolve ,reject ) 
{
//    alert("hello")
console.log('hello');

 resolve(45) 
})

console.log(" iam first one ");


setTimeout(function() {
  console.log("hii i am two")
}, 2000)

console.log(" iam three");
console.log(promise);

*/




// ---> FOR RESOLVE
/*
  let promise  = new Promise(function(resolve ,reject ) 
{
    console.log("promise is pending ");
setTimeout(() => {
    console.log(" i am promice and i am fulfilled");
//    resolve(true) 
resolve(45)
}, 9000);                      // --> jab tak promise state pending rhegi tab tak promise result bhi undefined hi dikhayega


})

console.log(promise);
*/



// --> FOR ERROR
/*
let promise  = new Promise(function(resolve ,reject ) 
{
console.log("promise is pending ");
setTimeout(() => {
console.log(" i am promice and i am fulfilled");
//    resolve(true) 


reject(new error("i am an error")) // isse me error create kar skta hu 


}, 9000);                      // --> jab tak promise state pending rhegi tab tak promise result bhi undefined hi dikhayega


})

console.log(promise);
*/





// FOR MULTIPLE PROMISE
/*
let promise = new Promise(function (resolve, reject) {
    console.log("promise is pending ");
    setTimeout(() => {
        console.log(" i am promice and i am fulfilled");
        resolve(true)
    }, 9000);                      // --> jab tak promise state pending rhegi tab tak promise result bhi undefined hi dikhayega
})


let promise2 = new Promise(function (resolve, reject) {
    console.log("promise is pending ");
    setTimeout(() => {
        console.log(" i am promice and i am REJECDTED");
        reject("i am an error")

    }, 9000);                      // --> jab tak promise state pending rhegi tab tak promise result bhi undefined hi dikhayega


})

console.log(promise);  // ISME ME RESOLVE KARA RHA HU
console.log(promise2);  // ISME ERROR CRETATE KAR RHE H
// ISKA RESULT SAME SMAY PE HI MILEGA

*/


/*

// THEN & CATCH METHOD
let promise = new Promise(function (resolve, reject) {
    console.log("promise is fulfilled ");
    setTimeout(() => {
        // console.log(" i am promice and i am fulfilled"); // --> then catch krte smay log ki jarurat nhi padti 
        resolve(true)
    }, 9000);                      // --> jab tak promise state pending rhegi tab tak promise result bhi undefined hi dikhayega
})


let promise2 = new Promise(function (resolve, reject) {
    console.log("promise is pending ");
    setTimeout(() => {
        // console.log(" i am promice and i am REJECDTED");  --> then catch krte smay log ki jarurat nhi padti

        reject(new Error("i am an error")) // isse me error create kar skta hu 

    }, 9000);                      // --> jab tak promise state pending rhegi tab tak promise result bhi undefined hi dikhayega


})

promise.then((value) => {
    console.log(value);

})

promise2.catch((error) => {
    console.log("some error ocurred .");  // to ab hamara erro dekhne ko milega

})

*/

// PROMISE CHAINING

/*
let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(" i am promice and i am fulfilled");
        resolve(34)

    }, 2000);
})


p.then((value) => {
    console.log(value);

   /* let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2")
        }, 2000)
    })
   // return p2;  

    // iski jagah ye  bhi kar skte h 
     return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2")
        }, 2000)
    })

    return p2;

}) .then((value) => {
        console.log("we are done");   // ye hamne p.then ki value ko .then kiya h hum isi tarah aur value ka bhi .then kar skte h 

        return 2

    }).then(() => {
        console.log("pakka done");
    })

// p.catch((error)=>{console.log("new error occured");  --> error ke liye
// })

*/


// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {

//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src;
//         document.body.appendChild(script)
//         script.onload() => {
//     resolve("new script loaded sir")

// }
// script.onerror = () => { reject(0) }
//     })
// }


