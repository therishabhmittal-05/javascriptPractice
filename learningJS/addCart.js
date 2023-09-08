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
