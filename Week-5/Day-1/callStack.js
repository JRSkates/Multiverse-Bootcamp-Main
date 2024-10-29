const myStack = [];

function addPandas() {
  myStack.push("Pandas");
}

function addZebras() {
  myStack.push("Zebras");
}

function addLions() {
  myStack.push("Lions");
}


// Currently myStack contains an empty array. 
// We want the array to contain the following values:
// ["Zebras", "Lions", "Pandas", "Pandas", "Lions", "Zebras"]

function updateStack() {
  addZebras();
  addLions();
  addPandas();
  addPandas();
  addLions();
  addZebras();
}
