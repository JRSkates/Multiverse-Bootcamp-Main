import React from "react";
import Car from "./components/Car";
// Data to pass as props
let cars = [
  { brand: "Tesla", color: "Red" },
  { brand: "Toyota", color: "White" },
  { brand: "VW", color: "Purple" },
  { brand: "Honda", color: "Green" },
];

function App() {
  return (
    <div className="app">
        {/* Render components here */}
        {cars.map((car, index) => (
            <Car key={index} data={car} />
        ))}
    </div>
  )
}

export default App;