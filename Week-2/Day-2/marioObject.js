const mario = {
    position: [0, 0],
    health: 100,
    armor: 100,
    move(direction) {
        if (direction == "left") {
            this.position[0] -= 1;
        } else if (direction == "right") {
            this.position[0] += 1;
        } else if (direction == "down") {
            this.position[1] -= 1;
        } else if (direction == "up") {
            this.position[1] += 1;
        } else {
            console.log("incorrect input");
        }
    },
    takeDamage(amount) {
        if (amount > (this.health + this.armor)) {
            this.health = 0;
            this.armor = 0;
        } else if ( amount > this.armor) {
            let healthDamage = amount - this.armor;
            this.armor = 0;
            this.health -= healthDamage;
        } else {
            this.armor -= amount;
        }
    }
};