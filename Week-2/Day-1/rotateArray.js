const rotateArray = (arr, direction) => {
    if (direction == "left") {
        arr.push(arr[0])
        arr.shift();
        return arr;
    } else {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        return arr;
    }
}

console.log(rotateArray([1, 2, 3, 4, 5], "left")); // Output: [5, 1, 2, 3, 4]
