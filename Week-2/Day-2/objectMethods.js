const cartoon = {
  name: "Bugs Bunny",
  species: "Rabbit",
  age: 80,
  occupation: "Trickster",
  catchphrase: "What's up, Doc?",
  friends: ["Daffy Duck", "Porky Pig", "Tweety Bird"],
  enemies: ["Elmer Fudd", "Yosemite Sam", "Marvin the Martian"],
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png",
  // Define your method here
  characterInfo() {
      return `Name: ${this.name} and Occupation: ${this.occupation}`
  }
};
  
console.log(cartoon.characterInfo()); // Output: Name: Bugs Bunny and Occupation: Trickster
