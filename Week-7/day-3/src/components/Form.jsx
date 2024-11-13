import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(20)
  const [namesArr, setNamesArr] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    // Prevents the page from refreshing
    console.log(`Submitting form with first name: ${name} and age: ${age}`)
    setNamesArr([...namesArr, {name: name, age: age}])
    setName("")
    setAge(20)
  }
  
  function handleNameChange (e) {
      setName(e.target.value)
  }

  function handleAgeChange (e) {
      setAge(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          {/* First name input element */}
          <input 
            value={name} 
            onChange={handleNameChange}
          />
        </label>

        {/* Age input element */}
        <label>
          Age:
          <input 
            type="number" 
            value={age} 
            onChange={handleAgeChange}
          />
        </label>
        <button>
            <span className='material-icons'>send</span>
        </button>
      </form>
      <p className="name">Your name is {name}</p>
      <p className="age">Your age is {age}</p>
      <div id="card">
        <h3>Names & Ages Submitted</h3>
        {namesArr.map((item) => (
          <p>{item.name} - {item.age}</p>
        ))}
      </div>
    </>
  );
}

export default Form;