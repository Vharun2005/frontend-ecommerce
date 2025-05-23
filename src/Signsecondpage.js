import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Signsecondpage = ({toggleForm}) => {
    const[name,setname] = useState('')
    const[password,setpassword] = useState('')
    const[email,setemail] = useState('')
    const [showpass,setShowPass] = useState(false)
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    
    const SignupUser = async() =>{
      if(!name||!email||!password){
        return null
      }
      try{
      setLoading(true)
      const Obj = {username:name,password:password,email:email}
      const response = await axios.post('http://localhost:3500/api/signup',Obj)
      const responseData = await response.data
      alert(responseData)
      navigate('/login')
      setname('')
      setemail('')
      setpassword('')
      }catch(error){
        if(error.response){
          alert(error.response.data)
          setname('')
          setemail('')
          setpassword('')
        }else{
          alert('error occured please reload website')
        }
      }finally{
        setLoading(false)
      }
    }
  return (
    <div className='d-flex justify-content-center align-items-center '>
    <div className=' border mt-5 cus-h-w jpg'>
        <h4 className='fw-medium text-center mt-3'>Signup</h4>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className='d-flex mt-3 flex-column ms-2'>
            <label className='center'>UserName</label>
            <input type='text'  className=' cus-name-input ' value={name} onChange={(e)=>setname(e.target.value)} required></input>
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
          <button className='signup-btn' onClick={()=>SignupUser()}>Signup</button>
          <p className='text-end mt-2'>Aldready have an account?<a className='cursor me-2' href='/login'>Login</a></p>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Signsecondpage