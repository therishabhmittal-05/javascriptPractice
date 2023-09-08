// function helloWorld(a,b){
//     console.log(`Rishabh is a ${a} and ${b} years old`)
// }

// helloWorld('boy', 19)
// function helloWorld(a,b){

//     return a + b;
// }
// const result = helloWorld()
// console.log(result);
// console.log(helloWorld(3));
function addCart(){
    const cartAdder = function(...num){
        return num
    }
    const arrayCart = cartAdder(2,3,5)
    let sum = 0;
    for (let index = 0; index < arrayCart.length; index++) {
        sum = sum + arrayCart[index]
    }
    console.log(sum);
}
addCart();
