class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        return `Drawing a ${this.color} shape.`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle('blue', 5);
console.log(myCircle.draw());  // Outputs: Drawing a blue shape.
console.log('Area of circle:', myCircle.calculateArea()); 
