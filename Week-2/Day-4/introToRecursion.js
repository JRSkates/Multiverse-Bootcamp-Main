function positiveDifference(a, b) {
    if (a >= b) {
        return a - b
    } else {
        return positiveDifference(b, a)
    }
}

console.log(positiveDifference(10, 5)) // Output: 5
console.log(positiveDifference(3, 10)) // Output: 7
