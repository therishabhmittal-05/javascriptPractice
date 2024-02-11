const readlineSync = require('readline-sync');
var w = []
for (var index = 1; index <= 100; index++) {
    w.push(index);
}
var i = parseInt(readlineSync.question('Enter the index (0 to 99): '));
function checkEven (w,i){
        if(w[i]%2 == 0){
            console.log("YES")
        }
        else{
            console.log("NO")   
        } 
}
checkEven(w,i+1);