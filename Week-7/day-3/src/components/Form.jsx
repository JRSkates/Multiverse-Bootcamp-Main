import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("")
  const [age, setAge] = useState(20)
  
  function handleNameChange (e) {
      setFirstName(e.target.value)
  }

  function handleAgeChange (e) {
      setAge(e.target.value)
  }

  return (
    <>
      <form>
        <label>
          First name:
          {/* First name input element */}
          <input value={firstName} onChange={handleNameChange}/>
        </label>

        {/* Age input element */}
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange}/>
        </label>
      </form>
      <p className="name">Your name is {firstName}</p>
      <p className="age">Your age is {age}</p>
    </>
  );
}

export default Form;