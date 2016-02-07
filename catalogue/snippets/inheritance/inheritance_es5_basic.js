/*

  Mammal
          ->  Cat

  The glue line is Cat.prototype = new Mammal();


 */


// Parent Object
var Mammal = function (name) {
  this.name = name;
  this.get_name = function () {
    "use strict";
    return this.name;
  };
  this.says = function () {
    return this.saying || '';
  };
};

// Child Object
var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
};

// Make the inheritance happen
Cat.prototype = new Mammal();

// Create a Cat
var cat = new Cat('Jess');

// Prove that it has access to the parent functions
console.log(cat.says() + ' says ' + cat.get_name());
//Output : meow says Jess