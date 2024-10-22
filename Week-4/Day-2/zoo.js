class Zoo {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    static MAX_NUMBER_OF_ANIMALS = 100
    static NUMBER_OF_ROOMS = 10

    static listOfAnimals() {
        return [
            "Penguins",
            "Zebras",
            "Monkeys",
            "Giraffe",
            "Hippo"
        ]
    }
}

console.log(Zoo.MAX_NUMBER_OF_ANIMALS)
console.log(Zoo.NUMBER_OF_ROOMS)
console.log(Zoo.listOfAnimals())
