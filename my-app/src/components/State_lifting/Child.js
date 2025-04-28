import React from 'react'

const Child = (props) => {
    const data = "i am from child";
    props.onChildData(data);
    
  return (
    <div>
        <p>I am child component</p>
      
      <p>{props.data}</p>
    </div>
  )
}

export default Child
