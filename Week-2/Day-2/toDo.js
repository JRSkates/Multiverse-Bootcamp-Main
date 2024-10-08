const todo = {
    description: "Wash the car",
    done: false,
    toggleDone() {
        if (this.done == true) {
            this.done = false
        } else {
            this.done = true
        }
    }
};

console.log(todo.done); // Logs false
todo.toggleDone();
console.log(todo.done); // Logs true
