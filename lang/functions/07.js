/*

 JavaScript Exercises : Functions

 Function invocation occurs when the function is not the property of an object.

 In this case, `this` is bound to the global object. This is a design flaw in the language.

 The below prints '500'. Why? Use the `that` technique to ensure '1' is printed instead.

 */

value = 500; //Global variable
var obj = {
    value: 0,
    increment: function() {

        this.value++;

        var innerFunction = function() {
            console.log(this.value);
        }

        innerFunction(); //Function invocation pattern
    }
}

obj.increment();