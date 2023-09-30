// i =20
// while (i > 10) {
//     console.log(`value of index is ${i}`)
//     i--
// }
//  let arr = ['Rishabh', 'Rahul', "Ramesh"]
//  let i = 0;
//  while (i < arr.length) {
//     console.log(`Name: ${arr[i]}`)
    
//  } 
// let score = 50
// do {
//     console.log(`Score is ${score}`)
//     score++
// } while (score < 100);

// let myNumbers = [1,2,3,4,5,6,7,8,9,10]
// for (const myNum of myNumbers) {
//     console.log(myNum)
// }

// let myString = 'Hello World!'
// for (const myStr of myString) {
//     if (myStr == " ") {
//         continue; 
//     }
//     console.log (myStr)
// }

// const myArr = [{
//     name: "Mittal",
//     Class: 'First'
// },
// {
//     name: 'Rishabh',
//     Class: 'Hero'
// }]
// for (const myObj of myArr) {
//     console.log(myObj)
// }
const myMap = new Map()
myMap.set('Name', 'Rishabh')
myMap.set("class",'hero')

for (const [key, value] of myMap) {
    console.log(`${key} : ${value}`)   
}