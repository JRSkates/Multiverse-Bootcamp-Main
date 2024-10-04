const maxOfThree = (a, b, c) => {
    return [a, b, c].sort(function(a, b){return a - b}).pop();

    // I know we havent covered arrays yet, however it seemed like
    // this problem was best solved with an array, and a compare 
    // function within the sort method
}

console.log(maxOfThree(10, 5, 8)); // Outputs: 10
console.log(maxOfThree(20, 15, 10)); // Outputs: 20
