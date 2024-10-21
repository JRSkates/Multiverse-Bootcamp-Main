class Person {
    constructor(name, age, favColor) {
        this.name = name
        this.age = age
        this.favColor = favColor
    }

    sayHello() {
        return `Hello my name is ${this.name}. I am ${this.age} years old and my favorite color is ${this.favColor}.`
    }
}

const jack = new Person("Jack", 28, "blue");
console.log(jack.sayHello());
