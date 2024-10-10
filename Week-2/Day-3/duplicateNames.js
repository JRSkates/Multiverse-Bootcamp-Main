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
  
function duplicateNames(arr) {
    const newArr = []
    let count = 0
    for (i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) {
            count += 1
        } else {
            newArr.push(arr[i])
        }
    }

    return count
}