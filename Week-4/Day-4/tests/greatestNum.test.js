const greatestNum = require('../src/greatestNum.js');

describe("greatestNum", () => {
    it("should return the largest number", () => {
      expect(greatestNum(4, 6)).toBe(6);
      expect(greatestNum(2, 1)).toBe(2);
    });
  
    it("should return num1 if both numbers are the same", () => {
      expect(greatestNum(2, 2)).toBe(2);
    });
  
    it("should throw an error if a non-number is provided as an argument", () => {
      expect(() => greatestNum(2, "6")).toThrow("Please only use numbers as arguments");
      expect(() => greatestNum("2", 6)).toThrow("Please only use numbers as arguments");
      expect(() => greatestNum(null, 6)).toThrow("Please only use numbers as arguments");
    });
});