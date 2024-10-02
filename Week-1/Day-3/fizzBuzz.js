let num = 5;
// num = 9;
// num = 14;
// num = 45;

let solution;

if (num % 15 == 0) {
    solution = "FIZZBUZZ"
} else if (num % 5 == 0) {
    solution = "BUZZ"
} else if (num % 3 == 0) {
    solution = "FIZZ"
} else {
    solution = num
}

console.log(solution);
