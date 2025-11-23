import { useState } from 'react'
import Card from './componet/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-5 rounded-2xl'>Tailwind Test</h1>
      <Card titel="This is a genrated Image" discription="This image  is a neatural beuti in erthe" btnName="Click me" />
      <Card titel="ha yhi hai " discription="kuchh bhi khatam tata bay bay" />
    </>
  )
}

export default App
