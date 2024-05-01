var a = 10;
a = "Hello";
console.log(a);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("John");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var x = isLegal(20);
function timer(timeMachine) {
    setTimeout(timeMachine, 1000);
}
function timeMachine() {
    console.log("Time Machine");
}
timer(timeMachine);
