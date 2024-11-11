import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import apiRequest from './appii/apiRequest';


const ViewElectronics = ({cartItems,setCartItems}) => {

  const [qty,setQty] = useState(1)
    const {id} = useParams()
    const [objitem,setobjItem] = useState([])
    
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
      const newObj = {...objitem,qty}
      console.log(objitem)
      const ifExists = cartItems.length ? cartItems.find((item) => item._id.toString() === id) :null
    
      if(ifExists){
        return toast('item aldready added to cart')
      }else{
        const newArr = [...cartItems,newObj]
        setCartItems(newArr)
        toast('Item added to Cart')
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
    
    useEffect(()=>{
      const fetchItems = async() =>{
        try{
          const responseTwo = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/electronics/'+id)
          const resultTwo = await responseTwo.json()
          setobjItem(resultTwo)
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
  return (
    <section className='d-flex justify-content-evenly changes'>
      
        {objitem &&
          <>
           <div className='text-center '>
            <img src={objitem.src} alt='' className='custom'></img>
           </div>
           <div className='  ms-3 custopa'>
            <ToastContainer position='top-center'/>
             <p className='fw-medium fs-3 text-center'>{` ${objitem.ProductName}`}</p>
             <p className='fw-medium fs-5 text-center'>{` ${objitem.prodDetails}`}</p>
             <p className='mt-2 text-center fw-medium '>Price:{objitem.price}</p>
             <p className='mt-2 text-center fw-medium' >Grab soon Offers Ends Soon</p>
             <p className='fw-medium fs-5'>Qty: <button onClick={()=>decrementQty()}>-</button> {qty} <button onClick={()=>incrementQty()}>+</button></p>
             <div className='text-center'>
             <button className="btn btn-warning fw-medium mt-2 mb-2" onClick={()=>addTocart()}>Add to Cart</button>
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

export default ViewElectronics