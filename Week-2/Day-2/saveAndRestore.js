const textEditor = {
    document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
    history: [],
    // Define your methods here
    save() {
        this.history.push(this.document.slice())
    },
    restore(i) {
        let copyHistory = this.history[i].slice();
        this.document = copyHistory;
    }
};
