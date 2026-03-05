/*
let promiseThree = new Promise(function (resolve, reject) {


   //Do an async task
    // DB calls, cryptography, network


    setTimeout(function () {
        let error = false;
        if (!error) { resolve({ username: "aman", email: "aman@123gmial.com" }) }
        else {
            reject('Error: something went wrong')
        }
    }, 2000)
})
// ab chaining kar rhe h 
promiseThree
    .then((value) => {
        console.log(value)
        return value.email;
    })
    .then((email) => {
        console.log(email)
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => console.log("promise is either rejected or resolve"))   // finally always execute
        */


// --> to ya to then catch se kar lo warna  asyc await me try catch se 

    let promiseFive = new Promise( (resolve, reject) =>{

          setTimeout(function () {
        let error = false;
        if (!error) { resolve({ username: "aman", email: "aman@123gmial.com" }) }
        else {
            reject('Error: something went wrong')
        }
    }, 2000)

    })

    async function consumePomiseFive() {

        try{
     const response =  await promiseFive 
       console.log(response)
        }
        catch(error){
            console.log(error)
        }
  
    }

    consumePomiseFive();

//fetch using async await
   
    async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers( ); 

// or

//  (async () =>{
//     await getAllUsers();
//  }) ();

// or

// getAllUsers().catch(err =>{
//     console.log(err)
// });


// handle with then catch 
 
fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) =>
{
return response.json() // jo resonse aata h use string form me convert karne ke liye 
})
.then( (data) =>{
console.log(data)
})
.catch( (error) =>{
    console.log(error)
})

// AB isme me dekho hamne phele ka koi comment nhi kiya h phir bhi chal rha h iska reason h 