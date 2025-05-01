import React from 'react'

const Todo = (props) => {
    const {title,desc,id} = props.todo
  return (
    <article>
     <div>
      <h3>{title}</h3>
      <p>{desc}</p>
     </div>
     <div>
        <button>
            <i className="fa fa-trash fa-2x"></i>
        </button>
     </div>

    </article>
    
    
  )
}

export default Todo
