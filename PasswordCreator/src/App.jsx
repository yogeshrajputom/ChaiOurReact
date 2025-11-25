import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [nuberAllowed, setNuberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABSDFGHJKLPOIUYTREWQZXCVNMasdfghjklpoiuytrewqzxcvbnm"
    if (charAllowed) {
      str += "!@#$%^&*()_+|"
    }
    if (nuberAllowed) {
      str += "1234567890"
    }
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*length)+1
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [length, nuberAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className='text-white text-center text-4xl'>Password Genrator</h1>
    </>
  )
}

export default App
