const sumMultiple = (a, b, c) => {
    sum = a + b
    
    if (c % sum == 0) {
        return true
    } else {
        return false
    }
}

console.log(sumMultiple(2, 3, 15)); // Output: true
console.log(sumMultiple(3, 5, 21)); // Output: false
