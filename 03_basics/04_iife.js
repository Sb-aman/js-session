(function () {
   console.log("hello");
   
}) ();   // --> first me semicolon mandatory warna dusre function me error ayega

(function(name){
console.log(`hello ${name} `);
   
}) ("aman");

( () => {  // not use funtion keyword  when use arrow function 
console.log("hii db connected");

}) ();