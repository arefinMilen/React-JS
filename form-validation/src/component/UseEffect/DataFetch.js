import React, {useState,useEffect} from 'react';

const loadingMessage = <p> Todos are Loading...</p>;
export default function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
        if(!res.ok){
          throw Error("Something went wrong while fetching the data");
        }
        return res.json();
      })
      .then((data)=>{
        setTodos(data);
        setLoading(false);
        setError(null);
      })
      .catch((error)=>{
        setError(error.message);
        setLoading(false);
      })
  },2000);
  },[]);
  const TodosElements = todos && todos.map((todo)=>{
          return <p key={todo.id}>

            {todo.title}
          </p>
        })
  return (
    <div>
      <h1>Todos</h1>
      {isLoading && loadingMessage}
      {error && <p> {error}</p>}
      { TodosElements}
    </div>
  )
}

