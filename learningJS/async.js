// // // // // // // // // const fs = require('fs')
// // // // // // // // // //filesystem -fs

// // // // // // // // // // const greet = ()=>{
// // // // // // // // // //     console.log("HelloWorld")
// // // // // // // // // // }
// // // // // // // // // // const name = ()=>{
// // // // // // // // // //     console.log("Rishabh")
// // // // // // // // // // }
// // // // // // // // // // const interval = setInterval(greet,2*1000)
// // // // // // // // // // setTimeout(name,3*1000)
// // // // // // // // // // setTimeout(()=>{
// // // // // // // // // //     clearInterval(interval)
// // // // // // // // // // },4*1000)

// // // // // // // // // fs.readFile("helloWorld.txt","utf-8",function(err,data){
// // // // // // // // //     console.log(data)
// // // // // // // // //     const arr = Array.from(data)
// // // // // // // // //     console.log(typeof(data));
// // // // // // // // //     // console.log(arr)
// // // // // // // // //     console.log(arr.reverse().join(''))
// // // // // // // // // })
// // // // // // // // function sum (n){
// // // // // // // //     let result = 0;
// // // // // // // //     for (let i = 0; i < n; i++) {
// // // // // // // //         result = result + i;
// // // // // // // //     }
// // // // // // // //     return result;
// // // // // // // // }

// // // // // // // // function findSum (){
// // // // // // // //     console.log(sum(100))
// // // // // // // // }
// // // // // // // // setTimeout(findSum,3000)
// // // // // // // // console.log("Hi i am learning promises")
// // // // // // // function squares(n){
// // // // // // //     return n*n;
// // // // // // // }
// // // // // // // function whatTodo(n,fn){
// // // // // // //     return fn(n)
// // // // // // // }
// // // // // // // console.log(whatTodo(5,squares))

// // // // // // const fs = require('fs')
// // // // // // function myAsync(){
// // // // // //     return new Promise(function(resolve){
// // // // // //         fs.readFile("helloWorld.txt","utf-8",function(error,info){
// // // // // //             resolve(info)
// // // // // //         })
// // // // // //     })
// // // // // // }
// // // // // // const yeah =(yeah)=>{
// // // // // //     console.log(yeah)
// // // // // // }
// // // // // // myAsync().then(yeah)
// // // // // // // const fs = require('fs')
// // // // // // // function myAsync(yeah){
// // // // // // //     fs.readFile("helloWorld.txt","utf-8",function(error,info){
// // // // // // //         yeah(info)
// // // // // // //     })
// // // // // // // }
// // // // // // // const yeah =(yeah)=>{
// // // // // // //     console.log(yeah)
// // // // // // // }
// // // // // // // myAsync(yeah)

// // // // // // function greet(){
// // // // // //     return new Promise(function(resolve){
// // // // // //         setTimeout(resolve,2000)
// // // // // //     })
// // // // // // }
// // // // // // function sayHello(){
// // // // // //     console.log("Hello Rishabh Welcome to Promise party")
// // // // // // }

// // // // // // greet().then(sayHello)

// // // // // var iPromise = new Promise(function(resolve){
// // // // //     resolve("Hi there")
// // // // // })

// // // // // iPromise.then(function(){
// // // // //     console.log(iPromise)
// // // // // })

// // // // function myPromiseIs (){
// // // //     return new Promise((resolve, reject) => {
// // // //         setTimeout(resolve,1000)
// // // //         resolve("Hi there")
// // // //     })
// // // // }
// // // // async function main(){
// // // //     // myPromiseIs().then(function(value){
// // // //     //     console.log(value)
// // // //     //  })
// // // //     const value = await myPromiseIs()
// // // //     console.log(typeof value)
// // // //     console.log(value)
// // // // }
// // // // main()

// // // function hello() {
// // //   console.log("Hello");
// // // }
// // // function CallBack() {
// // //   setTimeout(function () {
// // //     console.log("World");
// // //     setTimeout(hello, 5000);
// // //   }, 10000);
// // // }
// // // CallBack();

// // // resolve is a callback function and it is called by promise and not me.
// // //that's the differnece between writing callback function and [promise doing your work]
// // function readPromise(){
// //     const p = new Promise((resolve)=>{
// //         setTimeout(resolve,3000);
// //     });
// //     return p;
// // }
// // // console.log(p)
// // const p = readPromise();
// // p.then(()=>{
// //     console.log("Reading from Promise")
// // })
// // // function in 'then' is callback that gets stored in resolve function of promise
// // // function result (){
// // // console.log(p)
// // // }

// // // setTimeout(result,5000)

// const fs = require('fs')
// const readFile = ()=>{
//     const process = new Promise((resolve) => {
//         fs.readFile("cssBasics.txt","utf-8", (err, data) => {
//             resolve(data);
//         });
//     });
//     return process;
// }

// async function result(){
//     const fileReturn = await readFile();
//     console.log(fileReturn);    
// }
// result();


const fs =  require('fs');
const readFile = (whatToRead)=>{
    const process = new Promise((resolve)=>{
        fs.readFile(whatToRead, "utf-8", (err, data)=>{
            data = data + "\nRishabh Mittal \n22104089 \nHTTP Server";
            resolve(data);
        })
    })
    return process;
}

async function main(){
    const result = await readFile("DOMJs.txt");
    console.log(result);
}
main();
let {start , stop} = Date.now();

console.log(stop-start)

