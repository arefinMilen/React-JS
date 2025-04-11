import React,{useState} from 'react'
import style from './form.module.css';
export default function Forms() {

    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    
    const [user,setUser] = useState({name:'', password:'', email:''})
    const {name, email, password} = user
     
     
  
         

        const handleChange = (e) => {
            setUser({...user,[e.target.name]:e.target.value})
        }
        
    const handleSubmit = (e) => {
        console.log("form is submitted");
        // let userInfo = {
        //     name,
        //     email,
        //     password
        // }
        console.log(user);
        e.preventDefault();}
        
  return (
       <div className='style.formGroup'>
      <h2>Registration forms: </h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your name' id='name' value={name} onChange={handleChange}/> <br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' id='email' value={email} onChange={handleChange} /> <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' id='password' value={password} onChange={handleChange} /> <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
