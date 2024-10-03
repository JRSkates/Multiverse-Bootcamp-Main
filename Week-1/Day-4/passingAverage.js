const passingAverage = (a, b, c, d) => {
    let sum = (a + b + c + d) / 4;

    if (sum > 90) {
        return "You all passed with flying colors!";
    } else if (sum > 80) {
        return "You all passed, good job!";
    } else if (sum > 70) {
        return "You all passed";
    } else if (sum > 64) {
        return "You barely made it";
    } else {
        return "You failed!"
    }
}

console.log(passingAverage(90, 95, 92, 98)); // Output: You all passed with flying colors!
