const Person = require("../src/person.js");

describe("Person Class", () => {
    const person = new Person("Jack", 28)

    it("initialises a Person instance", () => {
        expect(person.name).toBe("Jack")
        expect(person.age).toBe(28)
    })

    it("greets with the greet method", () => {
        expect(person.greet()).toBe("Hello, my name is Jack.")
    })

    it("tells you their age with the tellAge method", () => {
        expect(person.tellAge()).toBe("I am 28 years old.")
    })

    it("birthday method increments the age by one", () => {
        person.birthday()
        expect(person.tellAge()).toBe("I am 29 years old.")
    })
})