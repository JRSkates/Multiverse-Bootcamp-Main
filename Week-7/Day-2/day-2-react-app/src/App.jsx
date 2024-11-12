import './App.css';
import Button from './components/Button'
import UserStatus from "./components/UserStatus";
import Animal from "./components/Animal";
import Color from "./components/Color";
import { useState } from 'react';


function App() {
  const [index, setIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState("");

  const updateAnimal = () => {
      index === animals.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const updateColor = (color) => {
    setSelectedColor(color)
  }

  const colors = ["red", "green", "blue"];

  const animals = [
    {
      name: "Elephant",
      funFact:
        "Elephants can communicate with each other using infrasound, which is a sound that is too low for humans to hear.",
      emoji: "🐘",
    },
    {
      name: "Giraffe",
      funFact:
        "Giraffes have extremely long necks, which help them to reach leaves and other food sources high up in trees.",
      emoji: "🦒",
    },
    {
      name: "Kangaroo",
      funFact:
        "Kangaroos are the only large animals that use hopping as their primary method of movement.",
      emoji: "🦘",
    },
    {
      name: "Penguin",
      funFact:
        "Penguins are excellent swimmers and can reach speeds of up to 22 miles per hour (35 km/h) in the water.",
      emoji: "🐧",
    },
    {
      name: "Sloth",
      funFact:
        "Sloths are known for their slow movement and spend up to 20 hours per day sleeping or resting.",
      emoji: "🦥",
    },
  ];

  const users = [
    { username: "Alice", isLoggedIn: true },
    { username: "Bob", isLoggedIn: false },
    { username: "Charlie", isLoggedIn: true },
  ];

  return (
    <>
    <div className="app">
      {users.map((user) => (
        <UserStatus data={user} />
      ))}
      <Button />
      <Animal data={animals[index]} updateAnimal={updateAnimal}/>
    </div>
    <div style={{ backgroundColor: selectedColor, padding: "20px" }}>
      <h1>Color Picker</h1>
      {/* Use .map() to render each Color component */}
      {colors.map((color) => (
        <Color 
          key={color} 
          color={color} 
          updateColor={updateColor} 
          selectedColor={selectedColor} 
        />
      ))}
    </div>
  </>
  );
}

export default App;
