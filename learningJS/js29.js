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
//  const user = userInfo.forEach((user)=>{
//     if(user.name==="Manoj")
//     return user
//  })

let  user = userInfo.filter((userData)=> { return userData.name === "Rishabh Mittal"})
user = userInfo.filter((name)=> name.name == "Manoj").map((data)=> data.RollNo == 22104089)

//  console.log(user)
 const wishlist = [
    {name:"Shampoo",price:500},
    {name:"Cards",price:500},
    {name:"Sugar",price:500},
    {name:"CarToys",price:500},
    {name:"Doll",price:500}
    ];
// const total = wishlist.reduce((adder, itemPrice)=> itemPrice.price + adder, 0)
// console.log(total);


let element = []
for (let index = 0; index < 100; index++) {
    element.push(index) 
     
}
const total = element.reduce((index, elements)=> {
    console.log(`index: ${index} and element:${elements}`)
    return index+elements},0)
console.log(total)