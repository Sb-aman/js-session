
let name = "aman    "
let name2 = "hello"

// console.log(name.length) // apan trim ka use karke bhi kar skte h 
// console.log(name.trim().length) // this is ok but what if we have multiple string then we apply multiple trim not good

// then we have to study 
// console.log(name.truelength)

// console.log(name2.length)


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh() // here valid for all beacuse we made object prototype which is valid for all function ,string, array
myHeros.hitesh()  // although function , string , array all passes through object 

myHeros.heyHitesh();
// heroPower.heyHitesh() // this will show an error because we only talk about array 