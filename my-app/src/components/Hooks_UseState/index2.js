import React,{useState} from 'react'

export default function Hook_State2() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        
    }
  return (
    <div>
        <h3> use hook state for function component</h3>
        <h2>count : {count}</h2>
      <buttion onClick={handleIncrement}>Increment</buttion>
    </div>
  )
}
