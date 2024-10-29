const Square = require("../src/square.js");
// Write your Square tests here. Do these first!
const { describe, it, test, expect } = require("@jest/globals");

describe("Square Class Tests", () => {
    it("initializes Square Class Instance", () => {
        const square = new Square(4, 4, 5, 5, "blue")
        expect(square.width).toBe(4)
        expect(square.height).toBe(4)
        expect(square.x).toBe(5)
        expect(square.y).toBe(5)
        expect(square.color).toBe("blue")
    })

    it("calculates the area of the square instance", () => {
        const square = new Square(4, 4, 5, 5, "blue")
        expect(square.calculateArea()).toBe(16)
    })
})