const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

const gooseFilter = (arr) => {
    finalArr = [];
        for (i = 0; i < arr.length; i++){
            if (!geese.includes(arr[i])) {
                finalArr.push(arr[i])
            }
        }
    return finalArr;
}

console.log(gooseFilter(["Mallard", "Hawksbill", "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher", "Mallard"])); // Output: ['Mallard', 'Hawksbill', 'Mallard']
