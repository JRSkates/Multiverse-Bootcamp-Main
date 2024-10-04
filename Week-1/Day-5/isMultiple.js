const isMultiple = (a, b) => {
    if (b % a == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isMultiple(3, 9)); // Output: true
console.log(isMultiple(4, 9)); // Output: false
