function plus(a, b) {
    let result = a + b;
    return result;
  }
  let sum = plus(2, 3);
  console.log("Sum: ", sum);
  
  function multiply(a, b) {
    let result = a * b;
    return result;
  }
  
  const product = multiply(2, 3);
  console.log("Product: ", product);
  
  
  const division = (a, b) => {
      let result = a / b;
      return result;
  }
  
  // Using one function output as a parameter for another function
  console.log(
    "An example of one function using the output of another:",
    multiply(sum, plus(1, 2))
  );
  
  function isEven(x) {
    if (x % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  

  let num = 10;
  if (isEven(10)) {
    console.log(num + " is Even!");
  } else {
    console.log(num + " is not Even!");
  }

  console.log("Is 10 even?", isEven(10));
  console.log("Is 9 even?", isEven(9));
  