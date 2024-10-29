const Page = require("../src/testingWithJest.js");
const { describe, it, test, expect } = require("@jest/globals");

describe("Page Class Tests", () => {
    const page = new Page("First Page", "This is the first page of content")
    test("Title is properly assigned", () => {
        expect(page.title).toBe("First Page")
    })

    test("Content is properly assigned", () => {
        expect(page.content).toBe("This is the first page of content")
    })

    test("wordCount method calcuates number of words in content", () => {
        expect(page.wordCount()).toBe(7)
    })
})