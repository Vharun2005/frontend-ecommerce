import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { BackendContext } from './context/Context';
import { CgProfile } from "react-icons/cg";

const AppBar = () => {

  const {user} = useContext(BackendContext)
  

  return (

  <Navbar expand="lg" className="bg-body-secondary" id='nav'>
    <Container>
       <h2 className='fs-1  logo-font fw-bold'><span><FaOpencart className='text-primary '/>FuryCart</span></h2>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
        <Nav className='text-center'>
          
          <Link to="/" className='fs-5 link me-4 ms-2 fw-medium  hover-effect mt-2'>Home</Link>
          <Link className='link' to='/cart'><p  className='fs-5 me-3 ms-2 mt-2  fw-medium  hover-effect' md={1}><FaShoppingCart/>Cart</p></Link>
          <div className=''>
                        {user ? (
                <Link className="link " to="/profile">
                  <div className='text-center d-flex justify-content-center'>
                  <p className="cursor fw-medium style d-flex ">
                    <CgProfile className="profile" />
                    <span className="profile-word ">profile</span>
                  </p>
                  </div>
                </Link>
              ) : (
                <Link to="/login" className="link">
                  <button className="login-btn fw-medium">LogIn</button>
                </Link>
              )}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppBar