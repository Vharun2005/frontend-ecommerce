<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import  './SignupPage.css'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import { BackendContext } from './context/Context';
import {useNavigate} from 'react-router-dom'
=======
import React, { useState } from 'react'
import  './SignupPage.css'
>>>>>>> f9fd2fecfffe65c92726eefe5ec7ef28f6d19928

const SignupPage = () => {
  const[name,setname] = useState('')
  const[password,setpassword] = useState('')
  const[email,setemail] = useState('')
<<<<<<< HEAD
  const [showpass,setShowPass] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()






   const {user,dispatch} = useContext(BackendContext)

  const LoginUser = async() =>{
    if(!name||!email||!password){
      return console.log('hi')
    }
    try{
    setLoading(true)
    const Obj = {username:name,password:password,email:email}
    const response = await axios.post('http://localhost:3500/api/login',Obj)
    const responseData = await response.data
    dispatch({
      type:"LOGIN",
      payload:responseData
    })
    localStorage.setItem('token',responseData)
    setname('')
    setemail('')
    setpassword('')
    navigate('/')
    }catch(error){
      if(error.response){
        alert(error.response.data)
        setname('')
        setemail('')
        setpassword('')
      }else{
        alert('eroor occured please reload website')
      }
    }finally{
      setLoading(false)
    }
  }


  return (
    <div className='d-flex justify-content-center align-items-center '>
      <p className='text-center'>{loading ? <p>loading...</p>:<p></p>}</p>
    <div className=' border mt-5 cus-h-w mb-3'>
        <h4 className='fw-medium text-center mt-3'>LOGIN</h4>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className='d-flex mt-3 flex-column ms-2'>
            <label className='center'>UserName</label>
            <input type='text'  className='cus-name-input   ' value={name} onChange={(e)=>setname(e.target.value)} required></input>
        </div>
        <div className='d-flex flex-column mt-2 ms-2'>
            <label className='center'>Email</label>
            <input type='email'  className=' cus-name-input' value={email} onChange={(e)=>setemail(e.target.value)} required></input>
        </div>
        <div className='d-flex flex-column ms-2 mt-2'>
            <label className='center'>Password</label>
            <div style={{backgroundColor:'white'}} className='cus-pass-width'>
              <input  type={showpass ? 'text' :'password'} required className=' cus-pass-input' value={password} onChange={(e)=>setpassword(e.target.value)} min={8} max={9}></input>
              <span>{ showpass ? <FaRegEye className='cursor' style={{color:'black'}} onClick={()=>setShowPass(!showpass)}/> : <FaEyeSlash style={{color:'black'}} className='cursor' onClick={()=>setShowPass(!showpass)}/>}</span>
            </div>
        </div>
        <div className='text-center mt-4'>
          <button className='signup-btn' onClick={()=>LoginUser()}>Login</button>
          <p className='text-end mt-2'>Don't have an account?<a className='cursor me-2' href='/signup'>signup</a></p>
=======


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
>>>>>>> f9fd2fecfffe65c92726eefe5ec7ef28f6d19928
        </div>
        </form>
    </div>
    </div>
  )
}

<<<<<<< HEAD
export default SignupPage
=======
export default SignupPage
>>>>>>> f9fd2fecfffe65c92726eefe5ec7ef28f6d19928
