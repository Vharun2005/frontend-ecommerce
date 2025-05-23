import React, { useState,useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import apiRequest from './appii/apiRequest';
import { BackendContext } from './context/Context';
import axios from 'axios';

const ViewShirt = ({cartItems,setCartItems,name}) => {
  const {user} = useContext(BackendContext)
    const {id} = useParams()
    const [objitem,setobjItem] = useState([])
    const [qty,setQty] = useState(1)
    useEffect(()=>{
      const fetchItems = async() =>{
        try{
          const responseTwo = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/tshirts/'+id)
          const resultTwo = await responseTwo.json()
          setobjItem(resultTwo)
          console.log(resultTwo)
        }catch(err){
          if(err.response){
            console.log(err.response.status)
            alert(`${err.response.status}`)
          }else{
            console.error(err.message)
          }
        }
      }
      fetchItems()
    })
    const incrementQty = () =>{
      if(qty<10){
        setQty(qty + 1)
      }else{
        toast("Stock is limited")
      }
    }
    const decrementQty = () =>{
      if(qty>1){
        setQty(qty -1 )
      }
    }
    const AddtoCart = async() => {
      if(user){
      const username = name
      const cartObj = {...objitem,qty,username}
      const ifExists = cartItems.length ? cartItems.find((item) => item._id === cartObj._id) : null
      if(!ifExists){
        const newArr = [...cartItems,cartObj]
        setCartItems(newArr)
        toast('Item added to the Cart')
        const URL = "http://localhost:3500/api/postcart/"
        await axios.post('http://localhost:3500/api/postcart/',cartObj)
      }else{
        return toast('Item aldready added to cart')
      }
    }else{
          toast('please Log in to Add the Item')
        }
    }
  return (
    <section className='d-flex justify-content-evenly changes'>
      
        {objitem &&
          <>
           <div className='text-center '>
            <img src={objitem.src} alt='shirt-img' className='custom'></img>
           </div>
           <div className='  ms-3 custopa'>
             <ToastContainer position='top-center'/>
             <p className='fw-medium fs-3 text-center'>Men Regular Fit Checkered Spread Collar Casual Shirt</p>
             <p className='mt-2 text-center fw-medium '>Price:{objitem.price}</p>
             <p className='mt-2 text-center'>All sizes are Avilable</p>
             <p className='mt-2 text-center fw-medium'>Grab soon Offers Ends Soon</p>
             <p className='fw-medium fs-5 text-center'>Qty: <button onClick={()=>decrementQty()}>-</button> {qty} <button onClick={()=>incrementQty()}>+</button></p>
             <div className='text-center'>
             <button className="btn btn-warning fw-medium mt-2 mb-2" onClick={()=> AddtoCart()}>Add to Cart</button>
            </div>
 
           </div>

          </>

        }
         {!objitem &&
          <>
            <p className='fw-medium text-center m-5 fs-3 '>Please Reload The Website !</p>

          </>

        }



        

    </section>
  )
}

export default ViewShirt