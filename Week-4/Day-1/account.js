class Account {
    constructor(accountId, balance) {
        this.accountId = accountId
        this.balance = balance
    }

    deposit(amount, currency) {
        if (currency == "GBP") {
            this.balance += amount * 1.20
        } else {
            this.balance += amount
        }
    }

    getBalance(currency) {
        if (currency == "GBP") {
            return `£${this.balance / 1.20}`
        } else {
            return `$${this.balance}`
        }
    }
}

const acc = new Account("xyz", 10);
