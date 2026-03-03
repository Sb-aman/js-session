
// ES6
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



class employee{
    constructor(emp_name , emp_id , emp_dept ){  // for creating construtor use  construtor keyword 
this.emp_dept  = emp_dept;
this.emp_name = emp_name;
this.emp_id  =  emp_id;
    }

    display(){
        return `${this.emp_name.toUpperCase()} `
    }
}
let emp_detail = new employee("aman" , 13 , "IT")
console.log(emp_detail);
console.log(emp_detail.display());



// behind the scene

function User(username, email, password){ 
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){ // function object ki tarah bhi behave karta h isliye prototype kar rhe h 
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());