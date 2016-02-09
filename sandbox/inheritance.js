var Vehicle = function(colour, wheels){
  "use strict";
  this.colour = colour
  this.wheels = wheels;
  this.describe = () => {
    console.log('The ' + colour + ' vehicle has ' + wheels + ' wheels');
  }
};


const car = new Vehicle("red", 4);
car.describe();


var bus = {};
bus.prototype = Object.create(Vehicle.prototype);
bus.wheels = 4;
bus.colour = 'White';
console.log(bus.describe())