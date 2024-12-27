import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa"
import { Link } from 'react-router-dom';


const AppBar = () => {
  return (

  <Navbar expand="lg" className="bg-body-secondary" id='nav'>
    <Container>
       <h2 className='fs-1  log fw-bold'><span><FaOpencart className='text-primary '/>FuryCart</span></h2>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
        <Nav className='text-center'>
          
          <Link to="/" className='fs-5 link me-4 ms-2 fw-medium  hover-effect mt-2'>Home</Link>
          <Link className='link' to='/cart'><p  className='fs-5 me-3 ms-2 mt-2  fw-medium  hover-effect' md={1}><FaShoppingCart/>Cart</p></Link>
          <div className='text-center'>
          <Link to={'/login'} className='link'><button className='login-btn fw-medium'>LogIn</button></Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppBar
