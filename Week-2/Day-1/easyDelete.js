const easyDelete = (arr, i) => {
    arr.splice(i, 1)
    return arr
}

console.log(easyDelete([1, 2, 3, 4, 5], 2)) // Output: [1, 2, 4, 5]
