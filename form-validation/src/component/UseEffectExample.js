import React,{useState,useEffect} from 'react'


const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState("false")
    useEffect(()=>{
        console.log("useFffect called");
    },[count])
    
  return (
    
    <div>
       {console.log("rendering component")}
      <h1 style={{textAlign:"start"}}>Count:{count}</h1>
      <button
       onClick={()=>{
        setCount((count)=>count+1);
        }}
        >+</button>
      <button
       onClick={()=>{
        setName(!name);
        }}
        >Name</button>

        <br/>
    </div>
  )
}

export default UseEffectExample;
