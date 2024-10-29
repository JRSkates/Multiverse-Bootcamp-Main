const addsTwo = require("../src/addsTwo.js");

describe("addsTwo function", () => {
    it("adds two numbers together", () => {
        expect(addsTwo(2, 2)).toBe(4)
        expect(addsTwo(10, 34)).toBe(44)
        expect(addsTwo(2645, 5673)).toBe(8318)
    })
})