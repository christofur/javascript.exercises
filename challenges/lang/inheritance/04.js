/*

 JavaScript Exercises : A custom Inherits method, removed a tiny bit of the alien inheritance syntax.

 Below is Crockford's custom 'inherits' sugar. Create an object that inherits another.

 */


Function.prototype.method = function(name, func) {
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
    return this;
}


Function.method('inherits', function (Parent) {
    'use strict';
    this.prototype = new Parent();
    return this;
});

var Mammal = function (name, says) {
    'use strict';
    this.name = name;
    this.says = says;
    this.hello = function () {
        //noinspection JSLint
        console.log(this.says + ' says ' + this.name);
    };
};

var Cat = function (name, says) {
    'use strict';
    this.name = name;
    this.says = says;
}.inherits(Mammal);


//Create a new cat object and make it say hello.