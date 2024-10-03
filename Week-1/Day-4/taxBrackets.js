// 1. You'll get a salary like this: 25780
// 2. You'll have to figure what band that is in...
// 3. Then return the original amount with the right tax subtracted

const taxBand = (salary) => {
    if (salary <= 9950) {
        return salary - (salary * 0.1)
    } else if (salary <= 40525) {
        return salary - (salary * 0.2)
    } else if (salary <= 86375) {
        return salary - (salary * 0.22)
    } else if (salary <= 164925) {
        return salary - (salary * 0.24)
    } else {
        return salary - (salary * 0.32)
    }
}

console.log(taxBand(40525)) // Should return 32420
