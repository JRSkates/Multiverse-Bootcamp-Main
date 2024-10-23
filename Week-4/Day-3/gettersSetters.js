class BankAccount {
    #balance;
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    getBalance() {
        return this.#balance;
    }
  
    setBalance(newBalance) {
          this.#balance = newBalance;
    }
}
