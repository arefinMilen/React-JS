import React,{useState} from 'react'
import style from './form.module.css';
export default function Forms() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    const handleName = (e) => {
        setName(e.target.value);}
    const handleEmail = (e) => {
        setEmail(e.target.value);}
    const handlePassword = (e) => {
            setPassword(e.target.value);}
    const handleSubmit = (e) => {
        console.log("form is submitted");
        console.log(name,email,password);
        e.preventDefault();}
        
  return (
       <div className='style.formGroup'>
      <h2>Registration forms: </h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your name' id='name' value={name} onChange={handleName}/> <br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' id='email' value={email} onChange={handleEmail} /> <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' id='password' value={password} onChange={handlePassword} /> <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
