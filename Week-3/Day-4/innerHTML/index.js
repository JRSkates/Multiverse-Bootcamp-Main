const button = document.querySelector("button");
const output = document.querySelector("#counter")
let count = 0

button.addEventListener("click", function(){
    count += 1;
    
    output.innerHTML = `Current Count: ${count}`;
})

module.exports = {
  button,
  output,
  count,
};
