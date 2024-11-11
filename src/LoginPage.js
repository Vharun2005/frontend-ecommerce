import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
     
    <div className='text-center mt-3'>
      <h3 className='fw-medium f'>Order is completed !</h3>
      <Link to={'/fashions'} className='link'><p className='fw-medium'><span>Explore More</span></p></Link>

    </div>

  )
}

export default LoginPage