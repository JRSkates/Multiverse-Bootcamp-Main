class Mammal {
    constructor(name) {
      this.name = name;
    }
    eats() {
      return `${this.name} eats Food`;
    }
}

class Dog extends Mammal {
    constructor(name, owner) {
        super(name);
        this.owner = owner;
    }

    hasOwner() {
        if (this.owner) {
            return true;
        } else {
            return false;
        }
    }
}

const max = new Dog("Max")
console.log(max.eats())
  