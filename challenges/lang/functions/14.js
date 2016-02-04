/*

 JavaScript Exercises : Functions

 JavaScript provides function scope.

 Variables available in the calling context are available in inner methods.

 Complete the expected outputs for the below code.

 */

var foo = function () {

    var a = 3, b = 5;

    var bar = function () {

        var b = 7, c = 11;
        // At this point, a is 3, b is 7, and c is 11

        a += b + c;
        // At this point, a is 21, b is 7, and c is 11

    };

    bar();
    console.log(a); //Expected output is:
    console.log(b); //Expected output is:
};

foo();
