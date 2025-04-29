import React from 'react'

const Child = (props) => {
  const mess = "I am from child component";
  props.onChildMess(mess);
  
  return (
    <div>
      <p>I am from child</p>
      <p>{props.message}</p>
    </div>
  )
}

export default Child

