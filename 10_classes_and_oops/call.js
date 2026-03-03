
 function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(username) // reference hold karne ke liye 
    SetUsername.call(this, username)// ab ye apna this nhi use karega upar wale ka this use karega 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
