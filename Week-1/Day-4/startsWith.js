const startsWith = (word, letter) => {
    if (word.toUpperCase().charAt(0) == letter.toUpperCase()) {
        return true
    } else {
        return false
    }
}

console.log(startsWith("JavaScript", "j")) // Should return true
console.log(startsWith("Skates", "J")) // Should return false
