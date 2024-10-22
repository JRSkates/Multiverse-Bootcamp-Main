class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    static getAge(vehicle) {
        const currentYear = new Date().getFullYear();
        return currentYear - vehicle.year;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    static hasFourDoors(vehicle) {
        return vehicle.numDoors === 4;
    }
}