import React from 'react'

const NewTodo = (props) => {
  props.onHandleNewTodo({title: "Handle new todo "});
  return (
    <div>
      NewTodo
    </div>
  )
}

export default NewTodo
