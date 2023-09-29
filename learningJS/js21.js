const month = 9
switch (month) {
        case 0:
            console.log("Jan")
        break;
        case 1:
            console.log("feb")
        break;
        case 2:
            console.log("march")
        break;
        case 3:
            console.log("april")
        break;
        case 4:
            console.log("may")
        break;
        case 5:
            console.log("june")
        break;
        case 6:
            console.log("july")
        break;
        case 7:
            console.log("august")
        break;
        case 8:
            console.log("september")
        break;
        case 9:
            console.log("october")
        //break;
        case 10:
            console.log("november")
        break;
        case 11:
            console.log("december")
        break;
    default:
            console.log('Different Calendar')
        break;
}
//if break not present execute the other case till break is not encountered
//default case is not printed even if break is absent 
// no.s and strings can be checked in cases(case sensitive in strings )
 // truthy and falsy values here empty set or 0 is considered to be false and other than it all is true
 // empty string-> false
 // empty array -> true
 /* falsy values:
    false, 0,-0, bigInt- 0n,"", null, undefined, NaN

    other than this is  truthy("0","false"," ",[], {}, function(){})
  */
 /*false == 0
    false == ""
    0 == ''
 */
//all of this is true
let Name = Promise();
