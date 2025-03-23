import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id:uuidv4(),
        title: "Todo 1",
        description: "This is the first todo",
    },
    {
        id:uuidv4(),
        title: "Todo 2",
        description: "This is the 2nd todo",
    },
    {
        id:uuidv4(),
        title: "Todo 3",
        description: "This is the 3rd todo",
    },
    {
        id:uuidv4(),
        title: "Todo 4",
        description: "This is the 4th todo",
    },
];
const List = () => {
    return 
    
        <div>
            {
                
                todos.map((todo) => {
                    const {id,title,description} = todo;
                    return <div key={id}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        </div>
                })
            }
            <div>list </div>
        </div>
          
    };

    export default List;

    
