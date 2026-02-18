/* ***********  SCOPE  ******************** */

//var c = 300  // ye global scope h jo block wagera ke bahar wo global scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "aman"

    function two(){
        const website = "google.com"
        console.log(username);
        
    } 
// console.log(website);    ***** rule ye h ki child parent ke varialble ko access kar skte h lekin parent child ke variable ko access nhi kar skte ******

    two()
}

one()







// ++++++++++++++++++ interesting ++++++++++++++++++



console.log(addone(5)) // ---> is decalaration me write kar skte h upar 

// function ko is tarah decalre kar skte  h
function addone(num){  
    return num + 1
}



addTwo(5)  // --> is declaration ke case me upar likhna means error because write before initializaton 
//or is tarah bhi kar skte h 
const addTwo = function(num){
    return num + 2
}
