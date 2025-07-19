import React, {useState,useEffect} from 'react';
import useFetch from './useFetch';

const loadingMessage = <p> Todos are Loading...</p>;
export default function DataFetch() {
const {data,isLoading,error} = useFetch('https://jsonplaceholder.typicode.com/todos');

  const loadingMessage = <p> Todos are Loading...</p>;
  const errorMessage = <p> {error}</p>;
  const TodosElements = data && data.map((todo)=>{
          return <p key={data.id}>

            {todo.title}
          </p>
        })
  return (
    <div>
      <h1>Todos</h1>
      {isLoading && loadingMessage}
      {error && errorMessage}
      { TodosElements}
    </div>
  )
}

