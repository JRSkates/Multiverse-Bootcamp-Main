const everyWhichWay = (a, b, c) => {
    if (a + b == c) {
        return 'sum';
    } else if (a - b == c) {
        return 'difference';
    } else if (a * b == c) {
        return 'product';
    } else if (a / b == c) {
        return 'fraction';
    } else {
        return null;
    }
}

console.log(everyWhichWay(3, 4, 7)); // Outputs: 'sum'
