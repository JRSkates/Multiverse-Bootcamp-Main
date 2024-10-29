const sumOfOneToN = (num) => {
    if (num < 1) {
        throw new Error("Please only use numbers larger than 1");
    }

    let sum = 0
    for(i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumOfOneToN;
