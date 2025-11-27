import { useState } from 'react'
import Input from './components/Input.jsx'
import useCurrencyInfo from './hooks/CurrenctyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("INR")
  const [to, setTo] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    const prevFrom = from
    const prevTo = to
    const prevAmount = amount
    const prevConverted = convertedAmount
    setFrom(prevTo)
    setTo(prevFrom)
    setAmount(prevConverted)
    setConvertedAmount(prevAmount)
  }

  const convert = () => {
    const rate = currencyInfo[to] ?? 0
    setConvertedAmount(amount * rate)
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url('https://images.pexels.com/photos/5921122/pexels-photo-5921122.jpeg')` }}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <Input
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChang={(val) => setAmount(val)}
                  onCurrencyChang={(currency) => setFrom(currency)}
                  selectCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5 '>
                <button
                  type='button'
                  className='absolute left-1/3 translate-x-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <Input
                  label='To'
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChang={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button 
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
