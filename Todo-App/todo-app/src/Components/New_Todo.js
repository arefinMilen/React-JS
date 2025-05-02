import React, {useState} from 'react'

import style from './newtodo.module.css'
const New_Todo = (props) => {
    const [Todo,setTodo] = useState({
        title: "", desc: ""
    });
    const {title,desc}=Todo;
    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) =>{
            return {
                ...oldTodo,
                [name]:e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(Todo)
        setTodo({
            title: " ",
            desc: " ",
        });
    };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
       <div className={style["form-field"]}>
        <label htmlFor='title'>Title :</label>
        <input type="text" id='title' name='title' value={title} onChange={handleChange}/>
       </div>
       <div className={style["form-field"]}>
        <label htmlFor='desc'>Description :</label>
        <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange}/>
       </div>
       <button type="submit">Add Todo</button>
    </form>
  )
}

export default New_Todo
