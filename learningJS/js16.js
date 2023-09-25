/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val1) {
    // const o = {};
    var val;
    return {
    toBe : function(val){
        if (val === val1)
        return true;
        else throw 'Not Equal'
    },
    notToBe: function (val){
    var val;
     if (val !== val1){
         return true;
     }
     else throw 'Equal';
 }
}
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */