/*

 JavaScript Exercises : Functions

 Constructor invocation happens when we call a function using the `new` prefix.

 When we do `new myFunction()`, a new object is created. `this` is bound to the new object.

 Return now returns the new object instance. What does the code below output?

 */

var Add = function(a,b) {
    var total = a + b;
    return total;
}

var result1 = new Add(1,2);
var result2 = new Add(1,2);
var result3 = Add(1,2);
console.log(result1);            //Expected output:
console.log(result1 == result2); //Expected output:
console.log(result3);            //Expected output: