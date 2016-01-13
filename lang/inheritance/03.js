/*

 JavaScript Exercises : Why we shouldn't use new().

 The following code illustrates how easy it is to forget new() and pollute the global scope.

 Fix this code up by adding new(), but remember, it's best avoided.

*/

var Mammal = function (name, says) {
    this.name = name;
    this.says = says;
};

var cat = Mammal('mr meow', 'purrrr');
console.log(says);