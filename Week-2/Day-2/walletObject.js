const wallet = {
    balance: 9.52,
    hasCash() {
        if (this.balance > 0) {
            return true
        } else {
            return false
        }
    },
    pay(amount) {
        if ((this.balance - amount) >= 0) {
            this.balance -= amount
            return true
        } else {
            return false
        }
    }
};
