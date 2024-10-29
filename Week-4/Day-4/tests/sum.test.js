const sum = require('../src/sum.js'); // Import the sum function

describe("sum", () => {
  
  it("should return the sum of two numbers", () => {
    expect(sum(2, 3)).toBe(5); // Example with positive numbers
  });

  it("should throw an error if one or both arguments are not numbers", () => {
    expect(() => sum(2, "3")).toThrow("Invalid arguments");
    expect(() => sum("2", 3)).toThrow("Invalid arguments");
    expect(() => sum(null, undefined)).toThrow("Invalid arguments");
  });

  it("should correctly handle negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5); 
    expect(sum(-2, 3)).toBe(1);  
  });

  // Test case 4: Should correctly handle large numbers
  it("should correctly handle large numbers", () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1); 
    expect(sum(-Number.MAX_SAFE_INTEGER, -1)).toBe(-Number.MAX_SAFE_INTEGER - 1);
  });
});