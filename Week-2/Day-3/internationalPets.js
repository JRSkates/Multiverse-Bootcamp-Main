let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

const internationalPets = (animal, country) => {
    for (const obj of animalNoises) {
        if (obj[animal]) {
            const sound = obj[animal][country];
            if (sound) {
                return `${animal.charAt(0).toUpperCase() + animal.slice(1)}s in ${country} say ${sound}`
            }
        }
    }
}

console.log(internationalPets("dog", "Germany")); // Output: Dogs in Germany say Wau Wau!
console.log(internationalPets("cat", "Uruguay")); // Output: Cats in Uruguay say Miau Miau!
console.log(internationalPets("chicken", "Iceland")); // Output: Chickens in Iceland say Chuck-chuck!
