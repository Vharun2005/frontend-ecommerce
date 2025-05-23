import React from 'react'
import './orderpage.css'
import {Link} from 'react-router-dom'

const OrderPage = ({setAmount,amount,name}) => {
    const paymentFunction = () => {
        try{
            let options = {
                key:"rzp_test_nZ8mJWd9SQzXz3",
                key_secret:"Yj18GNvVkIyp4DKdKJpfshUS",
                amount:amount*100,
                currency:"INR",
                name:"Vharun",
                description:"Order items testing purpose",
                handler:function(response){
                    alert(response.razorpay_payment_id);
                },
                prefill:{
                    name:"Vharun",
                    email:"vharunsivaraj06@gmail.com",
                    contact:"6374191796"
                },
                notes:{
                    address:"Razorpay corporate office"
                },
                theme:{
                    color:"#33399cc"
                }
            };
            let pay = new window.Razorpay(options)
            pay.open()
        }catch(err){
            console.log(err)
        }finally{
            setAmount(0)
        }

    }
  return (
    
    <section className='order-custom'>
        <div className=' order-main-div mt-3 mb-3'>
            <form className='text-center-med'>
                <p className='text-center fw-medium fs-4'>Order Details</p>
                <div className='name-section'> 
                    <input type='name' className='orderpage-input1' placeholder='First Name' required></input>
                    <input type='name' className='orderpage-input2' placeholder='last Name' required></input>
                </div>
                <div className='email-section mt-3'> 
                    <input type='email' className='orderpage-input1' placeholder='Email' required></input>
                    <input type='number' className='orderpage-input2' style={{ appearance: 'textfield', MozAppearance: 'textfield', WebkitAppearance: 'none' }} placeholder='mobile' required></input>
                </div>
                <div className='email-section mt-3'> 
                    <input type='number' style={{ appearance: 'textfield', MozAppearance: 'textfield', WebkitAppearance: 'none' }} className='orderpage-input1' placeholder='pincode' required></input>
                    <input type='text' className='orderpage-input2' placeholder='Locality' required></input>
                </div>
                <div className='address-section mt-3 '> 
                   <textarea className='text-area-input' placeholder='Address( Area and Street)' required></textarea>
                </div>
                <div className='email-section mt-3'> 
                    <input type='text' className='orderpage-input1' placeholder='City/District/Town' required></input>
                    <input type='text' className='orderpage-input2' placeholder='State' required></input>
                </div>
                <div className=''>
                    <p className='amount mt-2 ms-2 fs-5'>TotalAmount : Rs.{amount}</p>
                </div>
                <div className='text-center mt-3 d-flex justify-content-center'>
                    <Link className='link' to='/profile'><p className='pay-button' onClick={()=>paymentFunction()}>Save Details & Pay</p></Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default OrderPage