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

function greet(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = `Hello my name is ${arr[i]}`;
    }
    return arr
}

console.log(greet(names)); 
