import React, { useContext, useState } from 'react'
import './SignupPage.css'
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import { BackendContext } from './context/Context';
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { dispatch } = useContext(BackendContext)

  const loginUser = async () => {
    if (!name || !email || !password) {
      alert('Please fill in all fields')
      return
    }
    try {
      setLoading(true)
      const obj = { username: name, password, email }
      const response = await axios.post('https://full-stack-ecommerce-mini.onrender.com/api/login', obj)
      const responseData = response.data

      dispatch({
        type: "LOGIN",
        payload: responseData
      })
      localStorage.setItem('token', responseData)
      setName('')
      setEmail('')
      setPassword('')
      navigate('/')
    } catch (err) {
      if (err) {
        alert(err.response ? err.response.data || err.response : err.message || "An error occurred");
      } else {
        alert('An error occurred, please reload the website.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='border mt-5 cus-h-w mb-3'>
        <h4 className='fw-medium text-center mt-3'>LOGIN</h4>
        <form onSubmit={(e) => { e.preventDefault(); loginUser(); }}>
          <div className='d-flex mt-3 flex-column ms-2'>
            <label className='center'>Username</label>
            <input
              type='text'
              className='cus-name-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='d-flex flex-column mt-2 ms-2'>
            <label className='center'>Email</label>
            <input
              type='email'
              className='cus-name-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='d-flex flex-column ms-2 mt-2'>
            <label className='center'>Password</label>
            <div className='cus-pass-width'>
              <input
                type={showPass ? 'text' : 'password'}
                className='cus-pass-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <span>
                {showPass ? (
                  <FaRegEye className='cursor ms-2' style={{ color: 'white' }} onClick={() => setShowPass(!showPass)} />
                ) : (
                  <FaEyeSlash className='cursor ms-2' style={{ color: 'white' }} onClick={() => setShowPass(!showPass)} />
                )}
              </span>
            </div>
          </div>
          <div className='text-center mt-4'>
            <button className='signup-btn' type='submit'>{loading ? 'Loading...' : 'Login'}</button>
            <p className='text-end mt-2'>
              Don't have an account?
              <a className='cursor me-2' href='/signup'>Signup</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
