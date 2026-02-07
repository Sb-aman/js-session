// date and time
// const smay = new Date()
// console.log(smay);
// console.log(smay.toString());
// console.log(smay.toDateString());
// console.log(smay.toISOString());
// console.log(smay.toJSON());
// console.log(smay.toLocaleDateString());
// console.log(smay.toLocaleString());
// console.log(smay.toLocaleTimeString());
// console.log(smay.toTimeString());
// console.log(smay.toUTCString());


// let myCreatedDate = new Date(2023,0,13,5,34)
// console.log(myCreatedDate.toDateString());   // js me 0 yani january hota h
// console.log(myCreatedDate.toLocaleString());



// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {  // isse apan apne forma me de skte h values ko 
    weekday: "long",
    
})