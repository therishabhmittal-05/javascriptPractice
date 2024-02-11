// // // let Name = "Rishabh"
// // // let gender = "Mittal"
// // // console.log(`Welcome, ${firstName} ${lastName}`)
// // // // const info = [
// // //     {
// // //         name:"Rishabh",
// // //         gender:"male"
// // //     },
// // //     {
// // //         name: "shreya",
// // //         gender: "Female"
// // //     }
// // // ]
// // // for (let index = 0; index < 100; index++){
// // //     console.log(index)
  
// // // }
// // // let gender = "male"
// // // if(gender == true){
// // //     console.log("male")
// // // }
// // // else if (gender == false){
// // //     console.log("female")
// // // }
// // let myArr = [0,1,2,3,4,5,6,7]
// // // for (let i = 0; i < myArr.length; i++) {
// // //   if(myArr[i]%2==0){
// // //     console.log(myArr[i])
// // //   };   
// // // }
// // myArr = [3,5,2,988,6,9,78,44,456,789]
// // // let largestNo = myArr[0]
// // // for (let i = 0; i < myArr.length; i++) {
// // //     if (myArr[i]>largestNo) {
// // //         largestNo = myArr[i]
// // //     }   
// // // }
// // // console.log(largestNo)


// // // const myArrRev = myArr.reverse()
// // //     console.log(myArrRev)
// // //     console.log(myArrRev)

// // for (let i = 0; i < myArr.length/2; i++) {
// //     let indexOfLastElement = myArr.length-1
// //     let a = myArr[i]
// //     myArr[i] = myArr[indexOfLastElement-i] 
// //     myArr[indexOfLastElement-i]=a;
// // }
// // console.log(myArr)

// // const info = [
// //         {
// //             firstName:"Rishabh",
// //             lastName:"Mittal",
// //             gender:"Male"
// //         },
// //         {
// //             firstName: "Shreya",
// //             lastName:"Sharma",
// //             gender: "Female"
// //         }
// //     ]
// //    for (let i = 0; i < info.length; i++) {
// //     if (info[i].gender == "Female") {
// //         console.log(`${info[i].firstName} is female.`)
// //     }   
// //  }
// // let sum = 0;
// // for (let i = 0; i < 1000000000000; i++) {
// //     sum = sum +i;
    
// // }
// // console.log(sum)
// // const sum = function(num1, num2, fnToCall){
// //     const result = num1+ num2;
// //     fnToCall (result);
// // }

// // const displayResult = function(data){
// //     console.log(`Sum of numbers is ${data}`)
// // }
// // const displayPassiveResult = function(data){
// //     console.log(`Sum's result is ${data}`)
// // }
// // const ans = sum(1,3, displayPassiveResult);
// // const doArithmetic = (num1, num2, fnToCall)=>{
// //        return fnToCall(num1, num2);
// // }
// // const sum = (num1, num2)=>{
// //     return num1+num2;
// // }
// // const subtract = (num1, num2)=>{
// //     return num1-num2;
// // }
// // const multiply = (num1, num2)=>{
// //     return num1*num2;
// // }
// // const divide = (num1, num2)=>{
// //     return num1/num2;
// // }

// // const result = doArithmetic(4,5,sum)
// // console.log(result)
// // Passing functiona as the argument is callback

// // const counter = (i)=>{
// //     if (i==0) {
// //        console.log("0");
// //     }
// //     else {
// //         console.log(i)
// //       return counter(i-1)         
// //     }   
// // }
// // const runCounter = counter(30)


// // create a counter in JS function runs after 1second  (set interval)
// let count = 30
// function counter (){ 
//     if (count!=0) {
//         count--;
//     }
//  console.log(count)
// }
// const counting = setInterval(counter,1000);
// setTimeout(()=>{
//     clearInterval(counting)
// },31*1000)


// //create clock hh:mm:ss
// function time(){
//     const date = new Date(Date.now())
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()
// console.log(`${hours}:${minutes}:${seconds}`)
// }
// setInterval(time,1000)

// //calculate the time it takes between a setTimeOut and the inner function actually running
// let startTime =  Date.now()
// function timeToCalculate ()  {
//     let endTime = Date.now();
//     let timeElasped = endTime-startTime;
//     console.log(timeElasped/1000);
// }
//  setInterval(timeToCalculate,2000);

const squares = (n)=>{
    return n*n
}
const cube = (n)=>{
    return n*n*n
}

const Result=(a,b,fntoCall)=>{
    console.log(fntoCall)
    return (fntoCall(a)-fntoCall(b))
}
 console.log(Result(4,2,cube))