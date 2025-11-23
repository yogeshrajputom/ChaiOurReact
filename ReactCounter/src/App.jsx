import React from "react";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15)

  const addHendal = () => {
    setCounter(counter + 1)
  }
  const removeHendal = () => {
   if(counter===0){
    counter= 0;
   }else{
     setCounter(counter - 1)
   }
  }

  return (
    <>
      <h1>React Counter</h1>
      <p>counter Value is{counter}</p>
      <br />
      <button onClick={addHendal}>Add Value</button>
      <br />
      <button onClick={removeHendal}>Remove Value</button>
    </>
  )
}

export default App
