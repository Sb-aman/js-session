const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') --> with querySelector retireved


setInterval( function() {
let date = new Date()
//  console.log(date.toLocaleTimeString()); --> not valid
// clock.innerHTML = date.toLocaleTimeString();
},1000);

