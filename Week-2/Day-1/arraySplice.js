const myFavFoods = [
    "Fish and Chips", 
    "Tacos", 
    "Pizza", 
    "Pasta", 
    "Sushi"
];

const favTVShows = [
    "Breaking Bad",
    "Game of Thrones",
    "The Crown",
    "Stranger Things",
    "Downton Abbey",
];

const popGroups = [
    "Little Mix",
    "One Direction",
    "The Spice Girls",
    "JLS",
    "Girls Aloud",
];


myFavFoods.shift(); // remove first item from myFavFoods array
favTVShows.pop(); // remove last item from favTVShows array

popGroups.splice(2, 2) // remove 2 items from popGroups array starting at index 2
