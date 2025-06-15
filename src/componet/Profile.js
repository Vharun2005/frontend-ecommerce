import React, { useContext } from 'react'
import './profile.css'
import { BackendContext } from '../context/Context'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuPackageOpen } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { GiPowerButton } from "react-icons/gi";


const Profile = ({name}) => {
    const {dispatch} = useContext(BackendContext)
    
    const logout = () => {
        dispatch({
            type:'LOGOUT'
        })
        localStorage.removeItem('token')

    }
  return (
    <div>
      
      <> 
        <div className='d-flex justify-content-center align-item-center '>
           <div className='border text-center cus-profile'>
              <p className='d-flex ms-4 fw-medium fs-5'>Username: {name}</p>
              <div className='content-box d-flex justify-content-center border'>
                 <p className='order-box border'><span><LuPackageOpen className='order' style={{color:'blue'}}/></span> Orders</p>
                 <p className='order-box border'><span>< IoCart className='order' style={{color:'grey'}}/></span> CartItems</p>
                 <p className='order-box border'><span><TfiHeadphoneAlt className='order' style={{color:'black'}}/></span> HelpCenter</p>
                 <p className='order-box border'><span><IoMdContacts className='order' style={{color:'blue'}}/></span> Contact Us</p>
              </div>
              <div className='text-center'>
                <p className='logout-btn mt-1' onClick={()=>logout()}><GiPowerButton  style={{color:'red',fontFamily:'monospace'}}/>Logout</p>
              </div>
           </div>
            
        </div>
      </>
    
    </div>
  )
}

export default Profile