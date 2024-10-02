const randomFizzBuzz = () => {
    let num = Math.floor((Math.random() * 10000) + 1);
    let final;

    if (num % 15 == 0) {
        final = "FIZZBUZZ";
    } else if (num % 5 == 0) {
        final = "BUZZ";
    } else if (num % 3 == 0) {
        final = "FIZZ";
    } else {
        final = num;
    }

    console.log(num);
    return final;
}

console.log(randomFizzBuzz());
