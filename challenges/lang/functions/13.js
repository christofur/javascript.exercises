/*

 JavaScript Exercises : Functions

 You can augment Function.prototype to make a method available to all functions.

 Below is some general purpose code to add methods to functions. Add code at the bottom to register
 an extension method to Number which returns double that number.

 */


Function.prototype.method = function(name, func) {
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
    return this;
}

//Add code here to define and use a new method
