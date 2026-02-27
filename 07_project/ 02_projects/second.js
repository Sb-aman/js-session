 const form =  document.querySelector('form')
// const height  = parseInt(document.querySelector('#height').value) // yhi reason h ki agar bahar doge to automatic value empty set rhegi 


form.addEventListener('submit' , function (e){
e.preventDefault() // ye browse ka automatic behaviour rokne ke liye use hota h 

const height  = parseInt(document.querySelector('#height').value) //isliye yha par safe h
const weight  = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#results')

if(height === '' || height <0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`
 } if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`
}

const bmi = (weight / ((height*height)/10000)).toFixed(2);

if(bmi <18.6){
    results.innerHTML = `<span>${bmi} <br>under weight</span>`;
  }
  if(bmi >=18.6 || bmi<= 24.9){
    results.innerHTML = `<span>${bmi} <br> normal range</span>`;
    }
    if(bmi >24.9){
      results.innerHTML = `<span>${bmi} <br> overweight</span>`;
      }


 })