// const myArray = ["rishabh", "mittal"]
// console.log(myArray);
// console.log(myArray[0].split("").reverse().join(""));
// function doSum(start, end){
//     let sum = 0;
//     for (let index = start; index <= end; index++) {
//     sum = sum + index;     
// }
//  return sum;
// }


// console.log(doSum(3,45));
// let myObject = [{
//     "Full_Name": "Risahbh",
//     "Class":"ECE 2nd Year"
// }] 
// console.log(myObject)
// console.log(myObject[0].Full_Name + " is in " + myObject[0].Class)


// function sum(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// function subtract(a,b){
//     return a-b;
// }

// function calci (el1, el2, arithFn ){
//     return arithFn(el1, el2);
// }

// let result = calci(1,2, sum)
// console.log(result)
// function createPattern(starInrow, totalRows){
//     for (let i = starInrow; i < totalRows ; i++) {
//         let star = ""
//         for(let l = 1; l<i+1; l++){
//             star+="*";
//         }
//         for(let k = totalRows; k>i+1; k--){
//             star+=" ";
//         }
//         for(let m = totalRows; m>i+1; m--){
//             star+=" ";
//         }
//         for(let j = 1; j<i+1; j++){
//             star+="*";
//         }
//         console.log(star);
//     }
// }
// createPattern(1,5);

for(let i=0; i<5; i++){
    let star = ''
    for(let k=5;k>i+1; k--){
        star+=' '
    }
    for(let j=1; j<i+1; j++){
        star+='*'
    }
    for(let l=0; l<i+1; l++){
        star+='*'
    }
    console.log(star)
}
