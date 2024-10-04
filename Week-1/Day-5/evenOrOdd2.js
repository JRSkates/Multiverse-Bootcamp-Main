const evenOrOdd2 = (a, b) => {
    if ((a.length + b.length) % 2 == 0) {
        return `There are an even number of characters.`;
    } else {
        return `There are an odd number of characters.`;
    }
}

console.log(evenOrOdd2("Test", "tset")) // returns `There are an even number of characters.`
console.log(evenOrOdd2("TestO", "test")) // returns `There are an odd number of characters.`
