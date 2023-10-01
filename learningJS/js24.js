const myMap = new Map()
myMap.set('Name1', 'Rishabh Mittal')
myMap.set('Name2', 'Sushant Mittal')
myMap.set('Name3', 'Priyanka Mittal')
//console.log(myMap)
for (const data of myMap) {
    //console.log(data);
}
//order and uniqueness of keys is always maintained in maps, can't use same key again but values can be same :)
//Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. 
//alt+z is used for word wrap
// set(key, value) method to store value in map

for (let index = 0; index < myMap.size; index++) {
  
    //console.log(myMap.size)
}
 
 const myObject = {
    User1 : 'Rishabh Mittal',
    User2 : 'Priyanka Mittal',
    User3 : 'Sushant'
 }
// for (const iterator of myObject) {
    //console.log(iterator)
 //}
 for (const key in myObject) {
console.log(`value of key: ${key} is ${myObject[key]}`);
        
    }
 