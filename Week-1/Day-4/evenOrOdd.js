const evenOrOdd = (num) => {
    if (num % 2 == 0) {
        return `Your number ${num} is even`;
    } else {
        return `Your number ${num} is odd`;
    }
}

console.log(evenOrOdd(10)); // Output: Your number 10 is even
console.log(evenOrOdd(9)); // Output: Your number 9 is odd
