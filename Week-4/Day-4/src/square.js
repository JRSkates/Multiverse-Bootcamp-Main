class Square {
    constructor(width, height, x, y, color) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

module.exports = Square;
