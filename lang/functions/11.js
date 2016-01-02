/*

 JavaScript Exercises : Functions

 A function always returns a value. If no return value is specified, `undefined` is returned.

 If a function is invoked with the `new` prefix, and the return value is not an object, then
 `this` (the new object) is returned instead.

 Print out the expected output.

 */


var add = function(a,b){
    return a + b;
};

var multiply = function(a,b){
    a * b;
}

console.log(add(1,2));      //Expected output:
console.log(new add(1,2));  //Expected output:
console.log(multiply(2,2)); //Expected output:

