const button = document.querySelector("button");
let count = 0;

button.addEventListener("click", function(){
    count++;
    console.log(count);
})

module.exports = {
  button,
  count,
};