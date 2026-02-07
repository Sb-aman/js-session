const marvel_hero = ["ironMan" ,"thor" ,"caption"]

const dc_hero = ["suprMan" ,"batMan" ,"flash"]

// marvel_hero.push(dc_hero)  isse ek array ke andar duaraa array aa jayega

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);    ---> not good 


marvel_hero.concat(dc_hero)  // concat ke liye alag se object banana padta h 
// console.log(marvel_hero)

const allheros = marvel_hero.concat((dc_hero)) // dono sam hi output denge lekin dusra modern h 
// console.log(allheros);

const all_new_heros = [...marvel_hero, ...dc_hero]  // ... ye spread h means esa samjo kanch ka glass nich gira aur bikhar gyya
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // ye method sbhi ko spread kr degi
console.log(real_another_array);

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));               // ek array ke andar complex multiple array rhte h to flat(infinite) lena
// expected output: Array [0, 1, 2, 3, 4, 5]




console.log(Array.isArray("Hitesh")) // ye boolean h ky ye present h ya nhi puchegi
console.log(Array.from("Hitesh"))  // isse ye array ke form me convert kar dega
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // ye method number ko array ke form me banane ke lye h 

// console.log(Array.of("aman" ,"nanamn","akash" ,"raj"));