const sumOfOneToN = require("../src/sumOfOneToN");

describe('sumOfOneToN', () => {
    test('should return 3 for input 2', () => {
        expect(sumOfOneToN(2)).toBe(3);
    });

    test('should return 55 for input 10', () => {
        expect(sumOfOneToN(10)).toBe(55);
    });

    test('should return 210 for input 20', () => {
        expect(sumOfOneToN(20)).toBe(210);
    });

    test('should return 780 for input 39', () => {
        expect(sumOfOneToN(39)).toBe(780);
    });

    test('should throw an error for input 0', () => {
        expect(() => sumOfOneToN(0)).toThrow("Please only use numbers larger than 1");
    });

    test('should throw an error for negative input', () => {
        expect(() => sumOfOneToN(-5)).toThrow("Please only use numbers larger than 1");
    });
});