import React, { useState } from 'react'
import  './SignupPage.css'

const SignupPage = () => {
  const[name,setname] = useState('')
  const[password,setpassword] = useState('')
  const[email,setemail] = useState('')


  return (
    <div className='d-flex justify-content-center align-items-center jpg'>
    <div className=' border mt-5 cus-h-w'>
        <h4 className='fw-medium text-center mt-3'>LOGIN</h4>
        <form>
        <div className='d-flex mt-3 flex-column ms-2'>
            <label className='center'>UserName</label>
            <input type='text'  className=' cus-name-input ' required></input>
        </div>
        <div className='d-flex flex-column mt-2 ms-2'>
            <label className='center'>Email</label>
            <input type='email'  className=' cus-pass-input ' required></input>
        </div>
        <div className='d-flex flex-column ms-2 mt-2'>
            <label className='center'>Password</label>
            <input  type='password' required className=' cus-name-input ' min={8} max={9}></input>
        </div>
        <div className='text-center mt-4'>
          <button className='signup-btn'>Login</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default SignupPage
