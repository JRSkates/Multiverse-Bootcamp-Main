let num1 = 101;
let num2 = 1300;
let num3 = 900;

let smallestNum;

if (num1 < num2 && num1 < num3) {
    smallestNum = num1
} else if (num2 < num1 && num2 < num3) {
    smallestNum = num2
} else {
    smallestNum = num3
}

console.log(smallestNum);
