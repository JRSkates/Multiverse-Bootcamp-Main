const firstNonConsecutive = (arr) => {
    for (i = 1; i < arr.length; i++) {
        if ((arr[i] - 1) != arr[i - 1]){
            return arr[i]
        }
    }
    return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])) // Output: 5
console.log(firstNonConsecutive([1, 2, 3, 4, 5])) // Output: null
