import React,{useState} from 'react'

import {v4 as uuidv4} from 'uuid';

import Todos from './Todos'
import style from './home.module.css'
import New_Todo from './New_Todo'

const Home = () => {

    const [todos,setTodos] = useState([]);
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos,{id:uuidv4(), todo}]
        })
    }
  return (
    <div className={style.container}>
        <h1 style={{color:'green'}}>Todo App</h1>
        <New_Todo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} />
      
    </div>
  )
}

export default Home
