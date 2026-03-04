
const use = {
    _email : "aman@457" ,
    _password : 123456 ,

    get email(){
        return this._email.toUpperCase();
    }
                        ,
    set email(value){
        this._email = value;
    }
}

const s = Object.create(use)
console.log(s._email);
console.log(s._password)

console.log(s.email)
// console.log(s._password)