const milesToKM = (miles) => {
    let kilo = miles * 1.60934

    return `${miles} miles is equal to ${kilo} kilometers!`
}

console.log(milesToKM(90)); // 90 miles is equal to 144.8406 kilometers!
console.log(milesToKM(60)); // 60 miles is equal to 96.5604 kilometers!
