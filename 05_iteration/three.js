// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // arr array ke liye h string bhi ho skti h object bhi ho skta h 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {  // ye string ke liye 
    //console.log(`Each char is ${greet}`)
}


const map = new Map()

map.set("a" , "aman")
map.set("b" , "naman")
map.set("c" , "aniket")
map.set("d" , "ansh")
map.set("e" , "akash")
map.set("a" , "saumay")
map.set("d" , "ansh")  // -->ansh do bar h lekin use only one time because map will give unique values

// console.log(map);

map.set("b" ,"ravi") // set se value ko update kar rhe h
// console.log(map);

for (const key of map) {  // --> isse array ke form me mil jayega agar ye nhi chahiye then something different
   console.log(key);
}
//  Output ---> [ 'a', 'saumay']
//                [ 'b', 'ravi' ]
//                [ 'c', 'aniket']
//                [ 'd', 'ansh' ]
//                [ 'e', 'akash']    
               
for (const [key, value] of map) { 
   console.log(key," :- ",value);
}
//  Output 
// a  :-  saumay
// b  :-  ravi
// c  :-  aniket
// d  :-  ansh
// e  :-  akash 


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {  // --> ye for of loop object ke liye sahi nhi h 
    console.log(key, ':-', value);
    
}