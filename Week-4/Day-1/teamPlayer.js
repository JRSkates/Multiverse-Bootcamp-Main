class Player {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    fullName() {
        return `${this.firstName} ${this.secondName}`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error('The argument must be an instance of Player')
        }
    }
}

const player1 = new Player('John', 'Doe');
const player2 = new Player('Jane', 'Smith');

const myTeam = new Team('The Champions');

console.log(player1.fullName()); // Output: John Doe
console.log(player2.fullName()); // Output: Jane Smith

myTeam.addPlayer(player1); // Add player1 to the team
myTeam.addPlayer(player2); // Add player2 to the team

console.log(myTeam.playerCount()); // Output: 2
console.log(myTeam.players.map(player => player.fullName())); // Output: [ 'John Doe', 'Jane Smith' ]
