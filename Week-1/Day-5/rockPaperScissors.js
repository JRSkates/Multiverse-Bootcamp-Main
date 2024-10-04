const randomChoice = () => {
    const choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const winner = (player1, player2) => {
    if (player1 == player2) {
        return "It's a tie";
    } else if ((player1 == "paper" && player2 == "rock") || (player1 == "rock" && player2 == "scissors") || (player1 == "scissors" && player2 == "paper")) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }
}

console.log(winner(randomChoice(), randomChoice()));
