import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialGoogle } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className='text-white bg-dark p-1 mt-4 footer'>
         <h2 className='fs-3  logo-font fw-bold'><span><FaOpencart className='text-primary'/> FuryCart</span></h2>
         <div className='text-center mb-1'>
            <span className='fs-4 cursor '><FaFacebook/> <FaInstagram/> <SlSocialGoogle/> </span>

         </div>
         <p className='fw-medium text-center'><BiLogoGmail className='fs-5 ' /> office@furycart.ac.in</p>
         <p className='fw-medium text-center mb-1'>© 2024 copyrights reserved</p>
    </footer>
  )
}

export default Footer