const startsWithVowels = (words) => {
    let vowelArr = [];
    let vowels = "aeiouAEIOU"

    for (i = 0; i < words.length; i++) {
        const first = words[i][0];
        if (vowels.includes(first)) {
            vowelArr.push(words[i]);
        }
    }
    
    return vowelArr;
}

console.log(startsWithVowels(["apple", "banana", "cherry", "dog", "elephant"])); // Output: ["apple", "elephant"]
