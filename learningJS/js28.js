// var input_stdin = "p";
// function main() {
//     let str = String(input_stdin)
//     let ascii = str.charCodeAt(0)
//     if (ascii >= 65 && ascii <= 90) {
//         return 1;
//     }
//     else if (ascii >= 97 && ascii <= 122) {
//         return 0;
//     }
//     else {
//         return -1;
//     }
// }
// var result = main();
// console.log(result)
// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter something: ', (answer) => {
//   console.log('You entered:', answer);
//   rl.close();
// });
const wishlist = ["Shampoo", "Cards", "Sugar","CarToys","Doll"];
for (const item of wishlist) {
    // console.log(item); 
    // console.log(`You purchased ${item}!`)  
}   
function printMe(item){
    // console.log(item)
}
wishlist.forEach(printMe)

const purchaseCount = new Map();
purchaseCount.set("shampoo",2)
purchaseCount.set("Pen",2)
purchaseCount.set("MovieTickets",2)
purchaseCount.set("Chocolates",2)
purchaseCount.set("Doll",2)
purchaseCount.set("cartoy",3)
for (const [item, quantity] of purchaseCount) {
    // console.log(`${item}:- ${quantity}`)
}
for (const key in purchaseCount) {
    // console.log(key)
}


let [item] = purchaseCount.values()
// console.log(item)
// console.log(purchaseCount) 

// console.log(userInfo.lastLoggedIn)
// for (const userData in userInfo) {
//     console.log(`${userData} :- ${userInfo[userData]}`)

// }

const myArr = [2,3,4,5,6,7,71,2]
let sum = 0;
myArr.forEach((num)=>{
  sum += num;
})
// console.log(sum)
let userInfo = [
   {
    name: "Rishabh Mittal",
    class: "BTech 2nd year",
    RollNo: "22104089",
    lastLoggedIn: Date.now()
   },
   {
    name: "Manoj",
    class: "BTech 2nd year",
    RollNo: "22104089",
    lastLoggedIn: Date.now()
   },
   {
    name: "Rahul",
    class: "BTech 2nd year",
    RollNo: "22104089",
    lastLoggedIn: Date.now()
   }
]

userInfo.forEach((userData)=>{
    //  console.log(userData)
})
    console.log(1+"1"-1)

