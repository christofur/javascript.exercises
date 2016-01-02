/*

 JavaScript Exercises : Functions

 Below is an example of a closure. Instead of defining myObject as an object literal,
 we instead call a function (see () at end) which returns an object literal.

 This object literal has access to outer variables (such as `value`), but `value` is hidden
 from the rest of the program.

 We are not assigning a function to myObject. We are assigning the result of invoking that function.

 Complete the expected output for the code below.

 */

var myObject = function () {

    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () { return value;
        }
    };

}();

console.log(myObject.value);        //Expected output:
console.log(myObject.getValue());   //Expected output:
myObject.increment(2);              //Expected output:
console.log(myObject.getValue());   //Expected output:

