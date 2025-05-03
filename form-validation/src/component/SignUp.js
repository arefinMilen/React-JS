import React from 'react'
import * as yup from 'yup';

import { useFormik } from "formik";


const SignUp = () => {
    const formik = useFormik({
        initialValues  : {
            name : '',
            email : '',
            password : ''
        },
        validationSchema : yup.object({
            name : yup.string().min(2, "name must have atleast 2 characters").required(),
            email : yup.string().email().required(),
            password : yup.string().min(6, "name must have atleast 6 characters").required(),
        }),
        onSubmit: (values , {resetForm}) => {
            console.log(values);
            resetForm({values : ''});
        }
    });
    console.error(formik.errors);

    const renderNameError = formik.touched.name && formik.errors.name && <span style={{color: "red"}}>{formik.errors.name}</span>

    const renderEmailError = formik.touched.email && formik.errors.email && <span style={{color: "red"}}>{formik.errors.email}</span>

    const renderPasswordError = formik.touched.password && formik.errors.password && <span style={{color: "red"}}>{formik.errors.password}</span>

    const renderForm = (
        <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
            <br/>
            {renderNameError}
            
        </div>
        <div>
            <label htmlFor='email'>Email: </label>
            <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
            <br/>
            {renderEmailError}
        </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input type="text" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
            <br/>
            {renderPasswordError}
        </div>
        <button type="submit">SignUp</button>
      </form>
    )
  return (
    <div>
      <h2>User Sign up form</h2>
      {renderForm}
    </div>
  )
}

export default SignUp
