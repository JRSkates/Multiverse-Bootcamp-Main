const wallet = {
    color: "black",
    hasCash: true,
};

const updateProp = (obj, key, val) => {
    obj[key] = val
    return obj[key]
}

const newColor = updateProp(wallet, "color", "blue");
console.log(wallet.color); // Logs "blue"
console.log(newColor); // Logs "blue"
