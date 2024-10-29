function delayedHello() {
    console.log("Function starting up...");
  
    setTimeout(function() {
        console.log("Hello after 2 seconds")
    }, 2000)

    setTimeout(function() {
        console.log("Hello after 1 second")
    }, 1000)

    setTimeout(function() {
        console.log("Function Ending after 3 seconds")
    }, 3000)
}

delayedHello();
