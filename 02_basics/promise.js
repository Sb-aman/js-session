let promise  = new Promise(function(resolve ,reject )
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
