import React from 'react'

import Todos from './Todos'

const dummyTodos = [
    {
       id:1,
       title:'Todo 1',
       desc:'Todo 1 desc', 
    },
    {
       id:2,
       title:'Todo 2',
       desc:'Todo 2 desc', 
    },
    {
       id:3,
       title:'Todo 3',
       desc:'Todo 3 desc', 
    },
]
const Home = () => {
  return (
    <div>
      <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home
