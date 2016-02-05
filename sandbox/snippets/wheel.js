const car = {
  wheels: 4,
  colour: 'red',
  location: 0,
  go(distance) {
    this.location += distance;
  }
};

const wheel = function () {
  return {
    belongsTo: car
  };
};

export default wheel;
