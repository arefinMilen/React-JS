import React from 'react'

import { useFormik } from "formik";


const SignUp = () => {
    const formik = useFormik({
        initialValues  : {
            name : '',
            email : '',
            password : ''
        },
        onSubmit: (values , {resetForm}) => {
            console.log(values);
            resetForm({values : ''});
        }
    })

  return (
    <div>
      <h2>User Sign up form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
            <br/>
        </div>
        <div>
            <label htmlFor='email'>Email: </label>
            <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
            <br/>
        </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input type="text" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
            <br/>
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
