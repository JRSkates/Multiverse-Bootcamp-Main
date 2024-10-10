function sumAll(num) {
    // Base case: if num is 0, return 0
    if (num === 0) {
        console.log("Returning 0 for sumAll(0)");
        return 0;
    }
    console.log(`Calling sumAll(${num - 1})`);
    const result = num + sumAll(num - 1); // Call sumAll with num - 1
    console.log(`Returning ${result} for sumAll(${num})`);
    
    return result; // Return the total sum
}

console.log(sumAll(5)); // Output: 15
