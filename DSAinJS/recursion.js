let count = 0;
let a = [];
function recursion (){
    if(count == 3) return a;
    a.push(count)
    count++;
    return recursion();
}
console.log(recursion());