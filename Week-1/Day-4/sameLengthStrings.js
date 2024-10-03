const sameLenStr = (a, b, c, d) => {
    if (a.length + c.length == b.length + d.length) {
        return true
    } else {
        return false
    }
}

console.log(sameLenStr("Hello", "World", "Greetings", "Universe")); // Output: true
console.log(sameLenStr("Hello", "World", "Greetings", "Univer")); // Output: false
