/*

 JavaScript Exercises : Inheritance

 Inheritance has many benefits: code reuse (specialise objects, only writing their differences) and
 specifying relationships between objects to make casting easier (treat subclass as a parent).

 JavaScript doesn't have casting, but we can achieve lots of code reuse with its prototypal inheritance.

 Write out the following expected output.

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

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();

console.log(name);  //Expected output: