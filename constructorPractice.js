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