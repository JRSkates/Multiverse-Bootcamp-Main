function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    
    const lastElement = arr[arr.length - 1]; 
    const restReversed = reverseArray(arr.slice(0, -1)); 
    
    return [lastElement, ...restReversed]; 
}

const arr = [1, 2, 3, 4, 5]; // output [5, 4, 3, 2, 1]
