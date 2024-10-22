class Automobile {
    constructor(type) {
        this.miles = 0
        this.type = type
    }

    driveMiles(miles) {
        this.miles += miles
        return this.miles
    }

    static typeIsValid(type) {
        const VAILD_TYPES = [
            "car",
            "truck",
            "motorcycle"
        ]

        return VAILD_TYPES.includes(type)
    }
}
