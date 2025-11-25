import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [nuberAllowed, setNuberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef Hooks
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABSDFGHJKpoiuytrewqzxcvbnm"
    if (charAllowed) {
      str += "!@#$%^&*()_+|"
    }
    if (nuberAllowed) {
      str += "1234567890"
    }
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * 28) + 1
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, nuberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, nuberAllowed, passwordGenerator])
  console.log(Math.floor(Math.random() * length) + 1);


  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-400 shadow-md rounded-lg px-4 py-3 my-8 '>
        <h1 className='text-white text-center text-4xl mb-5'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={Password}
            className='outline-none w-full py-2 px-4 bg-white rounded-4xl shadow-amber-50'
            placeholder='password'
            readOnly
            ref={passwordRef} />
          <button
            onClick={copyPasswordToClipbord}
            className='bg-blue-500 hover:bg-blue-600 rounded-full w-fit mx-3 px-3 cursor-pointer shadow-2xl'>
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={28}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label> Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={nuberAllowed}
              id='numberInput'
              onChange={(e) => {
                setNuberAllowed((prevs) => !prevs)
              }}
            />
            <label htmlFor='nuberInput'> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => {
                setCharAllowed((prevs) => !prevs)
              }}
            />
            <label htmlFor='cahrInput'> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
