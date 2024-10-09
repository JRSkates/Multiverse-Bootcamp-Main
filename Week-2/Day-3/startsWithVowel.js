const startsWithVowels = (words) => {
    let vowelArr = [];
    for (i = 0; i < words.length; i++) {
        const first = words[i][0];
        if ("aeiouAEIOU".includes(first)) {
            vowelArr.push(words[i]);
        }
    }
    return vowelArr;
}

console.log(startsWithVowels(["apple", "banana", "cherry", "dog", "elephant"])); // Output: ["apple", "elephant"]
