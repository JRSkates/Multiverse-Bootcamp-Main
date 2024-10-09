const sumArrays = (arr) => {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArrays)([1, 2, 3, 4, 5]) // 15
