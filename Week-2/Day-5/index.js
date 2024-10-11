#!/bin/node
const drawer = require('./drawer')

// Level 1: removeItem and addItem

function removeItem(name, drawer) {
    for (i = 0; i < drawer.length; i++) {
        if (drawer[i].name == name && drawer[i].quantity != 0) {
            drawer[i].quantity -= 1
        }
    }
    
    return drawer
}


function addItem(name, drawer) {
    for (i = 0; i < drawer.length; i++) {
        if (drawer[i].name == name) {
            drawer[i].quantity += 1
        }
    }
    
    return drawer
}

// Level 2: countCoins and countNotes
function countCoins(drawer) {
    const coins = ["penny", "nickel", "dime", "quarter"];
    let count = 0;
    
    for(i = 0; i < drawer.length; i++){
        if(coins.includes(drawer[i].name)){
            count += drawer[i].quantity;
        }
    }

    return count
}

function countNotes(drawer) {
    const notes = ["one", "five", "ten", "twenty", "hundred"];
    let count = 0;
    
    for(i = 0; i < drawer.length; i++){
        if(notes.includes(drawer[i].name)){
            count += drawer[i].quantity;
        }
    }

    return count
}

// Level 3: sumDrawer

function sumDrawer(drawer) {
    let sum = 0

    for(i = 0; i < drawer.length; i++){
        if(drawer[i].name == "penny") {
            sum += (drawer[i].quantity * 0.01)
        } else if (drawer[i].name == "nickel") {
            sum += (drawer[i].quantity * 0.05)
        } else if (drawer[i].name == "dime") {
            sum += (drawer[i].quantity * 0.1)
        } else if (drawer[i].name == "quarter") {
            sum += (drawer[i].quantity * 0.25)
        } else if (drawer[i].name == "one") {
            sum += (drawer[i].quantity)
        } else if (drawer[i].name == "five") {
            sum += (drawer[i].quantity * 5)
        } else if (drawer[i].name == "ten") {
            sum += (drawer[i].quantity * 10)
        } else if (drawer[i].name == "twenty") {
            sum += (drawer[i].quantity * 20)
        } else {
            sum += (drawer[i].quantity * 100)
        }
    }

    return `$${sum.toFixed(2)}`
}

// Level 4: canMakeAmount

// function canMakeAmount(target, drawer) {
//     const achievable = Array(target + 1).fill(false);
//     achievable[0] = true;

//     const coins = [];
//     drawer.forEach(obj => {
//         for (let i = 0; i < obj.quantity; i++) {
//             coins.push(obj.value);
//         }
//     });
//     console.log(coins)
//     // Iterate through each coin
//     for (const coinValue of coins) {
//         // Update the achievable amounts in reverse order
//         for (let i = target; i >= coinValue; i--) {
//             if (achievable[i - coinValue]) {
//                 achievable[i] = true;
//             }
//         }
//     }

//     console.log(achievable)
//     return achievable[target];
// }

function canMakeAmount(target, drawer) {
    // loop backwards through the drawer
    for (i = drawer.length - 1; i >= 0; i--) {
    //    While  we still have some of this denomination, and it isnt too large...
        while (drawer[i].quantity > 0 && target - drawer[i].value >= 0) {
    //       subtract it from the target and take it out of the drawer.
            target -= drawer[i].value
            drawer[i].quantity -= 1
        }
    }
    // Finally return true if the target is now 0 (i.e we made exact change), otherwise false
    return target == 0
}


// Level 5: transaction

function transaction(cost, paid, drawer) {
    // Calculate the change due
    let changeDue = paid - cost;

    // Add customers cash to the draw
    for (let i = drawer.length - 1; i >= 0; i--) {
        while (paid > 0 && paid - drawer[i].value >= 0) {
            paid -= drawer[i].value;

            drawer[i].quantity++;
        }
    }

    // Remove custer's change from the drawer
    for (let i = drawer.length - 1; i >= 0; i--) {
        while (changeDue > 0 && changeDue - drawer[i].value >= 0) {
            changeDue -= drawer[i].value;

            drawer[i].quantity--;
        }
    }
    

    return drawer
}

console.log(sumDrawer(drawer)) // returns $335.12
console.log(canMakeAmount(1651, drawer)) // returns true
console.log(canMakeAmount(132343, drawer)) // returns true

// DO NOT EDIT CODE BELOW
module.exports = {
  removeItem,
  addItem,
  countCoins,
  countNotes,
  sumDrawer,
  canMakeAmount,
  transaction
}