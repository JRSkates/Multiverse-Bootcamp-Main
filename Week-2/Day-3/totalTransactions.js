const totalTransactions = (transactions) => {
    let sum = 0
    for (i = 0; i < transactions.length; i++) {
        sum += transactions[i].amount;
    }
    return sum
}

console.log(totalTransactions([{
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }])
) // Output: 10512
