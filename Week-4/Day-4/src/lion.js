class Lion {
    #id
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.#id = id;
    }

    sound() {
        return "Roar!"
    }

    getID() {
        return this.#id;
    }

    setID(id) {
        this.#id = id;
    }
}

module.exports = Lion;
