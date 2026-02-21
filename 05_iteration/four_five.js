
/* for of loop me --> value milti 
for in loop me ---> key milti h */

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]); // key ko value me print karane ke liye
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {  // --> map iteratible nhi h isliye for in loop nothing print
    // console.log(key);
}


// forEach loop
const coding = ["C", "java", "python", "cpp", "golang", "ruby"]

coding.forEach(function greet() { }) // normally function aise hi declare karte h lekin yha hame name nhi dena h
// coding.forEach( function (item) {console.log(item);
// })

// coding.forEach( (val) => {console.log(val);  // simply arrow function ka use bhi kar skte h 
// })

function greet(item) {
    console.log(item);

}
// coding.forEach(greet)


coding.forEach((item, index, arr) => { //  item val ke alawa aur bhi option h 
    // console.log(item, index, arr);

})


const myCoding = [
    {
        languageName: "java",
        languageFileName: ".java"
    }
    , {
        languageName: "python",
        languageFileName: ".py"
    },
    {
        languageName: "javascript",
        languageFileName: ".js"
    }
]

myCoding.forEach( (item) => {console.log(item.languageFileName, item.languageName); // array ke andar object ko access karna using foreach loop
})