const names = [
    "Muhammad",
    "Sofia",
    "Juan",
    "Amira",
    "William",
    "Mei Ling",
    "Ahmed",
    "Emeka",
    "Elena",
    "Malik",
    "Fatima",
    "Carlos",
    "Priya",
    "Sofia",
    "Juan",
    "Jacob",
    "Aisha",
    "Santiago",
    "Yara",
    "Ethan",
    "Ananya",
    "Ryan",
    "Aisha",
    "Ahmed",
];

function letterCount(arr) {
    const letterCounts = {};

    for (let name of arr) {
        for (let char of name) {
            if (char !== ' ') { 
                if (!letterCounts[char]) {
                    letterCounts[char] = 1;
                } else {
                    letterCounts[char] += 1;
                }
            }
        }
    }

    return letterCounts; 
}

console.log(letterCount(names));
