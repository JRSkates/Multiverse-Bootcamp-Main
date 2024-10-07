const swapElements = (arr, i, j) => {
    let first = arr[i];
    let second = arr[j];

    arr[i] = second;
    arr[j] = first;

    return arr
}

console.log(swapElements(["a", "b", "c", "d", "e"], 1, 3)); // Output: ["a", "d", "c", "b", "e"]
