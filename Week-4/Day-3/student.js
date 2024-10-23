class Student {
    #name
    #grade
    constructor(name, grade) {
        this.#name = name;
        this.#grade = grade;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setGrade(grade) {
        this.#grade = grade;
    }

    getGrade() {
        return this.#grade;
    }
}