import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div>
      <Count/>
    </div>
  )
}

function Count() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function increaseBtn() {
    if(count >= 0 ) {
      setCount(count + step)
    }
  }

  function decreaseBtn() {
    if(count > 0 ) {
      setCount(count - step)
    } 
  }

  function resetBtn() {
    if(count > 0 || step > 1) {
      setCount(0);
      setStep(1);
    }
  }

  const date = new Date();
  date.setDate(date.getDate() + count)
  
  return (
    <div>

      <h1>Count Date</h1>

      <span>{step}</span>
      <span style={{margin: "0 30px"}}><input type="range" name="" id="" min={1} max={20} value={step} onChange={(e) => setStep(Number(e.target.value))} /></span>

      <button onClick={decreaseBtn}>Decrease</button>

      <span style={{margin: "0px 10px"}}>{count}</span>

      <button onClick={increaseBtn}>Increase</button>

      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was`}</span>
        <span>{date.toDateString()}</span>
        </p>

        {count > 0 || step > 1 ? <button onClick={resetBtn}>Reset</button> : ""}
    </div>
  )
}

export default App
