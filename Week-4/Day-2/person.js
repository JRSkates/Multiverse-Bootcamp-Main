class Person {
    constructor(name) {
        if (!name) {
            throw new Error("Please include a name");
        }
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, bootcamp) {
        super(name);
        if (!bootcamp) {
            throw new Error("Please indicate your bootcamp");
        }
        this.bootcamp = bootcamp;
    }
}
