import React,{ useState } from 'react'

import Todos from './Todos';
import New_Todos from './New_Todos';

const dummyTodos = ["todos1", "todos2", "todos3"];
const Home = () => {
    const [todos,setTodos] = useState(dummyTodos);
    const handleNewTodo = (newTodo) => {
        console.log(newTodo);
    }
  return (
    <div>
        <New_Todos onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  )
}

export default Home
