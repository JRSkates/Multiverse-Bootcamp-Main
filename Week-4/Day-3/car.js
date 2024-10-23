class Car {
    #brand
    #color
    constructor(brand, color) {
        this.#brand = brand;
        this.#color = color;
    }

    setColor(color) {
        if (!color) {
            throw new Error("You must include a Color")
        }

        this.#color = color;
    }

    getColor() {
        return this.#color;
    }

    setBrand(brand) {
        if (!brand) {
            throw new Error("You must include a Brand")
        }

        this.#brand = brand;
    }

    getBrand() {
        return this.#brand;
    }
}
