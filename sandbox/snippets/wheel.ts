class Car {
    public wheels: number;
    private colour: string;
    private location: number;
    constructor(wheels: number, colour: string) {
        this.wheels = wheels;
        this.colour = colour;
        this.location = 0;
    }
    public go(distance: number): number {
        this.location += distance;
        return this.location;
    }
}

const ranger: Car = new Car(4, "blue");
console.log(ranger.wheels);


