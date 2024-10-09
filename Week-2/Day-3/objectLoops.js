let companies = {
    Apple: 2600000000000,
    Microsoft: 2290000000000,
    Amazon: 1740000000000,
    Alphabet: 1680000000000,
    Tesla: 910000000000,
    Facebook: 855000000000,
    Walmart: 405000000000,
};

const sumObject = (obj) => {
    let sum = 0
    for (const key in obj) {
        sum += obj[key];
    }
    return sum
}

console.log("Total revenue of all companies:", sumObject(companies)); // 10480000000000
