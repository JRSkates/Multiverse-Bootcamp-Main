const lowestVal = require("../src/lowestVal.js");
// DO NOT EDIT CODE ABOVE
describe("lowestVal function", () => {
    it("finds the lowest value in an array", () => {
        expect(lowestVal([1, 2, 3, 4])).toBe(1)
    })

    it("throws an error if element is not a number", () => {
        expect(() => lowestVal(["1", 2, 3, 4]).toThrow("Please check that your array only has numbers"))
    })
})