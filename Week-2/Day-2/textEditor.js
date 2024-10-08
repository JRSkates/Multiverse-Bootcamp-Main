const textEditor = {
    document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
    // Define your method here
    addCharacter(char) {
        this.document.push(char);
    }
};

console.log(textEditor.document); // Output: ["H", "i", ",", " ", "W", "o", "r", "l", "d"]
console.log(textEditor.addCharacter("!")); // Output: ["H", "i", ",", " ", "W", "o", "r", "l", "d", "!"]
