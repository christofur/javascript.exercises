

/*

    JavaScript Exercises : Functions

    Functions in JavaScript are Objects. Objects are collections of name / value pairs
    with a link to a prototype object. How do we access the prototype link?

    Complete the expected output for the lines of code below:

 */

var a = function b() {};
var c = function() {};
function d() {}
console.log(typeof a);
console.log(a.prototype);
console.log(a instanceof Function);
console.log(a.prototype instanceof Function);
console.log(typeof c);
console.log(c.prototype);
console.log(typeof d);
console.log(typeof d.prototype);