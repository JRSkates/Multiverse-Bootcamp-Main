const gross2Net = (grossPay) => {
    // let generalLess = grossPay * 0.25;
    // let stateLess = grossPay * 0.07;

    // let netPay = grossPay - (generalLess + stateLess);

    // return netPay

    // Just wanted to see if I could reformat this into a single line of code!

    // return grossPay - ((grossPay * 0.25) + (grossPay * 0.07))
}

console.log(gross2Net(100)); // Outputs: 68
console.log(gross2Net(200)); // Outputs: 136
console.log(gross2Net(57000)); // Outputs: 38760
