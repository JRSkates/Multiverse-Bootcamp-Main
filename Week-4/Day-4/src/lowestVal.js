const lowestVal = (arr) => {
    let lowest
    arr.forEach(num => {
        if (typeof num !== 'number') {
            throw new Error("Please check that your array only has numbers")
        }

        if (lowest === undefined || num < lowest) {
            lowest = num;
        } 
    })

    return lowest
}
// DO NOT EDIT CODE BELOW
module.exports = lowestVal;