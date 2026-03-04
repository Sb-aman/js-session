
class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    get email() { // getter and setter banane ke liye property ka name hi likhna padega
        return this._email;
    }

   /*set email(value) {
        this.email = value;
           ye error mil sktah kynki constructor aur setter dono hi value ko set karne me lage hua h isliye ye error aa raha h   --->  this.email = value;
                                                                                                                                      ^
                                                                                                                                  RangeError: Maximum call stack size exceeded
        
    // }  
    */

 // islliye ye karo 
 set email(email)  // name hi different kar dena ab jo name setter me wohi getter me 
 {
    this._email = email;
 }


 get username(){
    return this._username.toUpperCase();
 }

 set username(username){
    this._username  = username;
 }

}

const s = new user("aman@123", "ji@gmail.com")

console.log(s.email);
console.log(s.username);
