import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(() => 0)
  const [value, setValue] = useState("")
  const [clock, setClock] = useState(() => 0)

  function decrement() {
    setCount(prevCount => prevCount - 1) 
    setCount(prevCount => prevCount - 1)
  }

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const key = setInterval(() => {
      setClock(clock => clock + 1)
    }, 1000);
 
    return () => {
      clearInterval(key)
    }
  }, [])

  

  return (
    <>
        <button onClick={decrement}>-</button>
        <h1>count is {count}</h1>
        <button onClick={increment}>+</button>
        <br/> <br/> 
        <input 
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        /> 
        <h1>{value}</h1>
        <br/> <br/> 
        <p> {clock} seconds has passed. </p>
    </>
  )
}

export default App

 