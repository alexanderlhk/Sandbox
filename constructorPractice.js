/* What is __proto__ ? | Javascript Prototypes Tutorial
 https://www.youtube.com/watch?v=mQ4oCgcgHOA */

class Vehicle {
    constructor() {
        this.wheels = 4,
        this.motor = true
    }

    startVehicle() {
        console.log(`Ready to go with ${this.wheels} wheels!!`);
        return;
    }
}

const myCar = new Vehicle();
myCar.startVehicle();

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }

    startBike() {
        console.log(   `We're ready to start the bike with ${this.wheels} wheels!!`);
        return;
    }
}

const myBike = new Motorcycle();
myBike.startBike();
myBike.startVehicle();


const myTruck = new Vehicle();
myTruck.startVehicle();

// What are Classes, Objects, and Constructors? - https://www.youtube.com/watch?v=5AWRivBk0Gw&t=0s

class House {
    constructor(colour) {
        this.colour = colour;
    }

    getFurniture() {
        return `${this.colour} sofa`;
    }
}

const houseObject = new House('red');
const houseObject2 = new House('blue');

console.log(houseObject.colour);
console.log(houseObject2.colour);
console.log(houseObject.getFurniture());
console.log(houseObject2.getFurniture());


