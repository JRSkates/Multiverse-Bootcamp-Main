function whileCounting() {
  // TEST #1 CODE HERE
    let count = 0;
    while (count < 20) {
        console.log(count);
        count++;
    }
}

function onlyEvens() {
  // TEST #2 CODE HERE
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

function complimentGenerator(names) {
  // TEST #3 CODE HERE
    // return names.map(name => name + " is the best!");
    const updatedNames = []; // Create a new array to hold the updated names
    for (const name of names) {
        updatedNames.push(name + " is the best!"); // Add the updated name to the new array
    }
    return updatedNames; // Return the updated array
}
