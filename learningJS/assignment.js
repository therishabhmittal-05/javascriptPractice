// // // check anagram // anagram is set of similar letter words
// // function checkAnagram(str1, str2){
// //     const sorted1 = Array.from(str1).sort().join('')
// //     const sorted2 = Array.from(str2).sort().join('')
// //     return sorted1===sorted2;
// // }
// // console.log(checkAnagram("spar", "rasp"));

// function calculateSpentByCategory(type){
//         let totalPrice = 0;
//         const list = [
//             {
//                 itemName: "Brown Bread",
//                 category: "DailyUse",
//                 price: 40
//             },
//             {
//                 itemName: "Pen/Pencil",
//                 category: "Stationary",
//                 price: 500
//             },
//             {
//                 itemName: "Copies",
//                 category: "Stationary",
//                 price: 495
//             },
//             {
//                 itemName: "Mobile Phone",
//                 category: "Gadgets",
//                 price: 4000
//             },
//             {
//                 itemName: "Laptop",
//                 category: "Gadgets",
//                 price: 4000
//             }
//         ]
//         for (let i = 0; i < list.length; i++) {
//             if(type == list[i].category){
//                 totalPrice = totalPrice + list[i].price
//             }   
//         }
//         // this loop is heavy expression, take a look at reduce method


//         return totalPrice;
// }
// console.log(calculateSpentByCategory("Stationary"));

const arr = [2,5,3,7,8,5,3,677]

function largestElement(arr){
    let a= arr[0];
    if (arr.length==0) {
        return undefined;
    }
    else{
        
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]>a){
                a = arr[i]
            }
            
        }
    }
    return a;
}



console.log(largestElement(arr));