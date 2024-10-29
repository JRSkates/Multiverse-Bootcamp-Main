const greatestNum = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Please only use numbers as arguments");
    }
    return num1 >= num2 ? num1 : num2;
}
  
module.exports = greatestNum;
