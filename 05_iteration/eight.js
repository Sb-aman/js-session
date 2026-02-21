
  const arr = [2,3,4,5]

  const total = arr.reduce( function (acc,curr) { //acc -> ek accumulator h jo result store karta h
                  // and curr -> current h jo current element loop me chal rha h wo batata h 
    return acc+ curr;

  },0) // ye intital value hoti h jo value denge usse start hogi
console.log(total);


  const val = arr.reduce( (acc, curr) => acc+curr,0) // ye arrow function sr hogaya
  console.log(val);
  

  const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);