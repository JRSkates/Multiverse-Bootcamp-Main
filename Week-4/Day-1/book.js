class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
        this.ratings = []
    }

    addRating(rating) {
        this.ratings.push(rating)
    }

    averageRating() {
        let sum = this.ratings.reduce((acc, rating) => acc + rating, 0)
        return sum / this.ratings.length
    }
}

const book = new Book("To Kill a Mockingbird", "Harper Lee")
book.addRating(4)
book.addRating(5)
book.addRating(3)

console.log(book.averageRating()) // Output: 4
