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

function namesObj(arr) {
    const nameCounts = {};

    for (let i = 0; i < arr.length; i++) {
        const name = arr[i];

        if (!nameCounts[name]) {
            nameCounts[name] = 1;
        } else {
            nameCounts[name] += 1;
        }
    }

    return nameCounts; 
}

console.log(namesObj(names));