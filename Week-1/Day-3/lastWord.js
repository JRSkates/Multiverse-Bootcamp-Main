let word = 'mizzenmast';
// let word = "bed";
// let word = 'bedazzling';
// let word = 'pizza';
// let word = 'pizzicatos';
// let word = 'motivation';

let lastWord;

if (word.charAt(0) == "m" && word.length == 10) {
    lastWord = word.toUpperCase()
} else {
    lastWord = word
}

console.log(lastWord);
