import React from 'react';
import './footer.css'
import { FaOpencart } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='text-white bg-dark p-1 footer'>
         <h2 className='fs-2  logo-font PX fw-bold'><span><FaOpencart className='text-primary'/> FuryCart</span></h2>
         <div className='main-footer-div d-flex'>
            <div className='welcome-font'>
              <p>We are a young company always looking for new and creative ideas to help you with our products in your every day work.</p>
            </div>
            <div className='contact'>
              <p className='contact-header'>Contact</p>
              <p className='location'><IoLocationSharp className='icon'/> Via Rossini 10,10136 Turnin Italy</p>
              <p className='phone'><FaPhoneAlt className='icon'/> Phone: `(0039) 333 12 68 347`  </p>
              <p className='email'><BiLogoGmail className='icon'/> gmail:furycart05@gmail.com</p>
              <p className='skype'><FaSkype className='icon'/> Skype:you_online</p>
            </div>
            <div className='Links '>
              <p className="link-header">Links</p>
              <p style={{cursor:'pointer'}} >Home</p>
              <p style={{cursor:'pointer'}}>Buy Products</p>
              <p style={{cursor:'pointer'}}>Features</p>
              <p style={{cursor:'pointer'}}>Terms</p>
              <p style={{cursor:'pointer'}}>Account</p>
            </div>
         </div>
    </footer>
  )
}

export default Footer