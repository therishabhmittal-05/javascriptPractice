// const myUser = {
//     name : 'Rishabh Mittal',
//     age : 19,
//     location : 'Jalandhar',
//     lastLoggedIn : ["monday", "tuesday"]
// }
// // console.log(myUser)
// // console.log(myUser.name)
// myUser.email = "rishabh@apple.ai"
// myUser.Welcome = `Hello, ${myUser.age}`
// // console.log(myUser['Welcome'])
// myUser.greetings = ()=>{
//     console.log(`hello, ${myUser.name}`)
// }
// console.log(myUser.greetings())
const myObj1 = {
    name : "rishabh"
}
const myObj2 = {
    class : "ECE"
}
const myObj3 = Object.assign({},myObj1,myObj2)
console.log(myObj3===myObj1)