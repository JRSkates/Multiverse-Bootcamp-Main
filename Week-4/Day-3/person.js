class Person {
    #age
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }
}
