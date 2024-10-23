class Passenger {
    #name
    #passportNum
    constructor(name, passportNum, seatNumber) {
      this.#name = name;
      this.#passportNum = passportNum
      this.seatNumber = seatNumber
    }

    getName() {
      return this.#name;
    }
    
    getPassportNum() {
      return this.#passportNum;
    }
}