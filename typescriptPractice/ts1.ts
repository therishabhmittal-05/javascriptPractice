

let a:any = 10;
 a = "Hello";
console.log(a);


function greet(firstName: string){
    console.log("Hello " + firstName);
}
greet("John");


function sum(a: number, b: number){
    return a + b;
}

console.log(sum(2, 3));


function isLegal(age: number){
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}
let x = isLegal(20)


function timer(timeMachine:()=>void){
    setTimeout(timeMachine, 1000)
}
function timeMachine(){
    console.log("Time Machine");
}
timer(timeMachine);