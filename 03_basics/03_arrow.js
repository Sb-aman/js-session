// **********************    arrow    ****************************

// this --> current context ko refer karta h



/*
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);  // ye apan this ke andar chal kya rha h ye dekhte h 
*/


function chai(){
    let username = "hitesh"
    console.log(this.username);  //  ----> function ke andar this ka use nhi ho skta  
}
chai()



// chai()

/*const addTwo = (num1, num2) => {
    return num1 + num2
}*/

/*const addTwo = (num1, num2) =>  num1 + num2    // ++++++ ye method bhi h single ko declare karne ke liye +++++++++
*/


// or 
/*const addTwo = (num1, num2) =>  (num1 + num2) // agar curly braces h to return likhna aur paranthesis h to nhi likhna 
*/

const addTwo = (num1, num2) => ({username: "hitesh"})  // agar sirf curly braces use karoge to undefined milega


console.log(addTwo(3, 4))




// const myArray = [2, 5, 3, 7, 8] // array ke case me bhi apan likh skte h 

// myArray.forEach()




