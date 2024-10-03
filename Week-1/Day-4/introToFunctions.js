const sayName = () => {
    console.log("Hello my name is Jack.")
}

const sayAnyName = (name) => {
    return `Hello my name is ${name}.`
}

const customGreeting = (name, mood) => {
    return `Hello my name is ${name}. I am ${mood} today.`
}

console.log(customGreeting("Jack", "happy"));