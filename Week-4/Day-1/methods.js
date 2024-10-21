class Person {
    constructor(name, age, hometown) {
        this.name = name
        this.age = age
        this.hometown = hometown
    }

    bio() {
        return `${this.name} is ${this.age} and from ${this.hometown}`
    }
}

const jack = new Person("Jack", 28, "Horsham");

console.log(jack.bio());