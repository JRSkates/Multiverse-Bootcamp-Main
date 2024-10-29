const Lion = require("../src/lion.js");
// Write your code here

describe("Lion Class", () => {
    const lion = new Lion("Simba", 12, 1)
    it("initialises the Lion Class", () => {
        expect(lion.name).toBe("Simba")
        expect(lion.age).toBe(12)
    })

    it("returns 'Roar!' with the sound method", () => {
        expect(lion.sound()).toBe("Roar!")
    })

    it("returns the id private property with getId", () => {
        expect(lion.getID()).toBe(1)
    })

    it("updates the id with setID", () => {
        lion.setID(2)
        expect(lion.getID()).toBe(2)
    })
})
