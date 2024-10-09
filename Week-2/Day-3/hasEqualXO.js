const hasEqualXO = (string) => {
    xCount = 0;
    oCount = 0;
    strArr = string.toLowerCase().split("");
    
    for (i = 0; i < strArr.length ; i++) {
        if (strArr[i] == "o") {
            oCount += 1;
        }

        if (strArr[i] == "x") {
            xCount += 1;
        }
    }
    
    return xCount == oCount;
}

console.log(hasEqualXO("ooxx")); // Output: true
console.log(hasEqualXO("xooxx")); // Output: false
