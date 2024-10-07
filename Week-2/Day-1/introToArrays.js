const dogNames = [
    "Buddy",
    "Max",
    "Charlie",
    "Bailey",
    "Lucy",
    "Daisy",
    "Rocky",
];

let fifthDog;

const outdoorActivities = [
    "Hiking",
    "Camping",
    "Fishing",
    "Kayaking",
    "Biking",
];

const bands = [
    "Coldplay",
    "The Beatles",
    "Queen",
    "U2",
    "Radiohead",
    "The Rolling Stones",
    "Fleetwood Mac",
    "Green Day",
    "Oasis",
    "Led Zeppelin",
];


// Write your code here
fifthDog = dogNames[4];
dogNames[5] = "Fido";

outdoorActivities.unshift("Swimming"); // add "Swimming" to the beginning of the array
outdoorActivities.push("Rock Climbing"); // add "Rock Climbing" to the end of the array

bands.shift(); // remove "Coldplay" from the beginning of the array
console.log(bands)
bands.pop(); // remove "Led Zeppelin" from the end of the array
console.log(bands)

bands.splice(bands.indexOf("Green Day"), 1); // remove "Green Day" from the array
console.log(bands)
