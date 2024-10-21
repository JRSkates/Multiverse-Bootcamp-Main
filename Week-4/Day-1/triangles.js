class Triangle {
    constructor(base, height) {
        this.base = base
        this.height = height
        this.corners = 3
    }

    taller(dh) {
        this.height += dh
    }

    area() {
        return 0.5 * this.base * this.height
    }
}

const triangle = new Triangle(10, 5, 3)

console.log(triangle.area()) // Output: 25
triangle.taller(2)
console.log(triangle.height) // Output: 7
console.log(triangle.corners) // Output: 3
