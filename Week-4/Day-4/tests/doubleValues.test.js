const doubleValues = require("../src/doubleValues.js");
const { describe, it, test, expect } = require("@jest/globals");

describe("doubleValues function", () => {
    
    it("returns an array of the initial values doubled", () => {
        const arr = [2, 4, 6]
        expect(doubleValues(arr)).toEqual([4, 8, 12])
    })

    it("throws an error when the array contains a value that is not a number", () => {
        const arr = [2, "hi", 6]
        expect(() => {
            doubleValues(arr)
        }).toThrow("Array can only contain numbers")
    })
})
