/*

 JavaScript Exercises : Inheritance

 Make the Cat object inherit properties from Mammal.

 */

var Mammal = function (name) {
    this.name = name;
};
Mammal.prototype.get_name = function () {
    return this.name;
};

Mammal.prototype.says = function () {
    return this.saying || '';
};

var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};

// Add code here
var cat = {};

console.log(cat.says()); //Expected Output:
