#!/bin/node
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

class Basket {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (item instanceof Item) {
            this.items.push(item);
        } else {
            throw new Error('Only items can be added')
        }
    }

    total() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    remove(i) {
        this.items.splice(i, 1);
    }
}
