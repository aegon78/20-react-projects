import { useState } from 'react'
import './index.css'


function App() {

  const [counter, setCounter] = useState(0)
  return(
    <>
    <button className='substract-btn' onClick={()=> setCounter(prev => prev - 1)}>-</button>
    <span className='counter'>{counter}</span>
    <button className='add-btn' onClick={()=> setCounter(prev => prev + 1)}>+</button>
    </>
  )
}

export default App
