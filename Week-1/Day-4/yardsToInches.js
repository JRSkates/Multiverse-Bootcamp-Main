const yards2Inches = (yards) => {
    let inches = yards * 36
    return `Given ${yards} yard(s), you have ${inches} inches`
}

console.log(yards2Inches(5)) // Output: Given 5 yard(s), you have 180 inches
