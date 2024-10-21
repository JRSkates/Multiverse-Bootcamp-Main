class Song {
    constructor(songTitle, artist, length, genre) {
        if (!songTitle) {
            throw new Error('Please enter a title');
        }
        
        this.songTitle = songTitle;
        this.artist = artist;
        this.length = length;
        this.genre = genre;
    }

    sing() {
        return `${this.songTitle} by ${this.artist}`
    }
}

const song = new Song('Hello', 'John Doe', '3:45', 'Pop');
console.log(song.sing()); // Output: Hello by John Doe
