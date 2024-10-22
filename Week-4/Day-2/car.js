class Car {
    constructor(model, color = "black") {
      this.model = model;
      this.color = color;
    }
  
    drive() {
      return "Vroom!";
    }
  
    // Write your code here
    static compareColor(first, second) {
        return first == second;
    }
};
