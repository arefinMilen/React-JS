import React,{useState} from 'react'

const Toggle = () => {
    const [toggle,setToggle] =useState(true);
  return (
    <div style={{
        color:'black',backgroundColor:'silver',
    }}>
      {
        toggle && (
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        </p>
        )
      }
        
        <div style={{textAlign:"center"}}>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Show":"Hide"}</button>
        </div>
        
    </div>
  )
}

export default Toggle
