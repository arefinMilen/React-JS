import React from 'react'
import style from './form.module.css';
export default function Forms() {
    const handleName = (e) => {
        console.log(e.target.value);}
    const handleEmail = (e) => {
        console.log(e.target.value);}
    const handlePassword = (e) => {
        console.log(e.target.value);}
    const handleSubmit = (e) => {
        console.log("form is submitted");
        e.preventDefault();}
        
  return (
       <div className='style.formGroup'>
      <h2>Registration forms: </h2>
      <form action="" onChange={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your name' id='name' onChange={handleName}/> <br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' id='email' onChange={handleEmail} /> <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' id='password' onChange={handlePassword} /> <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
