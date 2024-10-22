class Bag {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }

    static company = "Boolean Airways"

    static printAirline() {
        return `Welcome to ${this.company}!`
    }

}

console.log(Bag.printAirline());
