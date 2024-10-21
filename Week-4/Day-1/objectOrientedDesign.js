class Duck {
    constructor(name, beakColor, age) {
        this.name = name
        this.beakColor = beakColor
        this.age = age
    }

    quack() {
        return `${this.name} the duck with the ${this.beakColor} beak says quack quack`
    }
}

const duckOne = new Duck("Daffy", "green", 5)

console.log(duckOne.quack())
