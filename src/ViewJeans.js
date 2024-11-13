import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import apiRequest from './appii/apiRequest';

const ViewJeans = ({cartItems,setCartItems}) => {
    const {id} = useParams()
    const [jeanitem,setJeanitem] = useState(null)
    const [qty,setQty] = useState(1)
    useEffect(()=>{
      const fetchItems = async() =>{
        try{
          const responseTwo = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/jeans/'+id)
          const resultTwo = await responseTwo.json()
          setJeanitem(resultTwo)
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
    },[id])
    
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
    const addTocart = async() =>{
      const newObj = {...jeanitem,qty}
      const ifExists = cartItems.length ? cartItems.find((item) => item._id.toString() === id) :null
      
      if(ifExists){
        toast('Item aldready in Cart')
      }else{
        const newArr = [...cartItems,newObj]
        setCartItems(newArr)
        toast('Item added to Cart')
        console.log(cartItems)
        const URL = "https://full-stack-ecommerce-mini.onrender.com/api/carts/"
        const postOptions = {
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newObj)
        }
        console.log(newObj)

        const result = apiRequest(URL,postOptions)
        if(result){
          console.log(result)
        }
      }
    }
    

  return (
     <section className='d-flex justify-content-evenly changes'>
        {jeanitem && 
           <>
              <div className='text-center'>
                <img src={jeanitem.src} alt='shirt-img' className='custom'></img>
              </div>
             <div className=' ms-3 custopa'>
                <ToastContainer position='top-center'/>
                <p className='fw-medium fs-3 text-center'>Men Regular Fit Jean</p>
                <p className='mt-2 text-center fw-medium '>Price:{jeanitem.price}</p>
                <p className='mt-2 text-center'>All sizes are Avilable</p>
                <p className='mt-2 text-center fw-medium' >Grab soon Offers Ends Soon</p>
                <div className='text-center'>
                <p className='fw-medium fs-5'>Qty: <button onClick={()=>decrementQty()}>-</button> {qty} <button onClick={()=>incrementQty()}>+</button></p>
                <button className="btn btn-warning fw-medium mt-2 mb-2" onClick={()=>addTocart()}>Add to Cart</button>
                </div>
    
             </div>
           </>

        }
        
            {!jeanitem &&
                <>
                  <p className='fw-medium text-center m-5 fs-3 '>Please Reload The Website !</p>
      
                </>
      
              }
        
     </section>

      
  )
}

export default ViewJeans
