const pi =
  "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196";

//let piNumber = Number(pi);

// console.log(piNumber);
// console.log(piNum.toString().length - 2);
// console.log(piNum)
// console.log(count)

let decimalCount = 15;

const isTrue = (count, piNum) => {
    let finalPi = Number(piNum).toString().length - 2
    if (count === finalPi) {
        return true;
    }
}

console.log(isTrue(decimalCount, pi));