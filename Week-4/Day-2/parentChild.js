class Character {
    constructor(health, speed, attackPower) {
        this.health = health;
        this.speed = speed;
        this.attackPower = attackPower;
    }

    move() {
        return `The character moves at a speed of ${this.speed}`;
    }
}

class Warrior extends Character {
    constructor(health, speed, attackPower, weapon) {
        super(health, speed, attackPower);  // Inherit properties from Character
        this.weapon = weapon;  // Set weapon specific to Warrior
    }

    useWeapon() {
        return `The warrior attacks with a ${this.weapon}`;
    }
}

const myWarrior = new Warrior(100, 15, 20, 'sword');
console.log(myWarrior.move());  // Outputs: The character moves at a speed of 15
console.log(myWarrior.useWeapon());  // Outputs: The warrior attacks with a sword
