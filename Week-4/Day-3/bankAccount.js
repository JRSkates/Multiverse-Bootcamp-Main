class BankAccount {
    #owner
    #balance
    constructor(owner) {
          this.#owner = owner;
          this.#balance = 0
    }

    getOwner() {
          return this.#owner;
    }

    getBalance() {
          let pounds = Math.floor(this.#balance); 
          let pence = Math.round((this.#balance - pounds) * 100);

          pence = pence < 10 ? '0' + pence : pence;

          return `£${pounds}.${pence}`; 
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (this.#balance < amount) {
            throw new Error("Insufficient funds");
        } else {
            this.#balance -= amount;
        }
    }
}