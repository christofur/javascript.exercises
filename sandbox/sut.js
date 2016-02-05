
const Vehicle = {
  color: 'red'
};

const car = {
  brand: 'Ford'
};

car.prototype = Vehicle;

module.exports = car;
