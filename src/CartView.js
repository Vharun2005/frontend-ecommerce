
import { Link } from 'react-router-dom'
import apiRequest from './appii/apiRequest';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

const CartView = ({cartItems,setCartItems,cartloading,name,setAmount}) => {
 
  
  
  const incrementQty = async (id) => {
    try {
        // Update the cart items state
        const updatedCart = cartItems.map((item) => {
            if (item._id === id) {
                if (item.qty === 10) {
                    toast('Stock is limited');
                    return item; // Return unchanged item if stock limit is reached
                }
                return { ...item, qty: item.qty + 1 }; // Increment quantity
            }
            return item; // Return unchanged item
        });

        // Set updated cart items
        setCartItems(updatedCart);

        // Get the updated item to send to the backend
        const updatedItem = updatedCart.find((item) => item._id === id);
        const username = name; // Assuming `name` is available in the current scope

        // Prepare the payload
        const payload = { ...updatedItem, username };

        // Make the API call
        const URL = "http://localhost:3500/api/carts/"; // Corrected URL
        await axios.patch(URL, payload);
    } catch (error) {
        console.error('Error updating quantity:', error);
        toast('Failed to update quantity');
    }
};

  const decrementQty = async(id) => {
    const updateArr = cartItems.map((item)=>( item._id === id ? {...item,qty:item.qty>1?item.qty-1:item.qty}:item))
    setCartItems(updateArr)
    const username = name
    const Postarr = updateArr.find((item) => item._id === id)
    const payload = {...Postarr,username}
    await axios.patch('http://localhost:3500/api/carts',payload)
  }
  const removeItem = async(id) =>{
    const updateArr = cartItems.filter((item)=>(
      item._id !== id
    ))
    const payload = {_id:id,username:name}
    setCartItems(updateArr)
    await axios.delete('http://localhost:3500/api/carts', {
      data: {
        _id: id,
        username: name,
      },
    });
  }
  const updateAmount = () => {
    let amount = cartItems.reduce((acc,item) => (acc+item.qty *item.price),0)
    setAmount(amount)
  }

  return (
    <div>
    <section className='d-flex justify-content-evenly flex-directi-column '> 
       <div className="con">
         <p className={cartloading ? 'loader' :''}></p>
        </div>
      
      { cartItems.length ? 
      
        <>
         <div>
         

         <ToastContainer position='top-center'/>
         {
          cartItems.map((item)=>{
            return(
                
              <div className='border mt-2 ms-5 custom-viewcart mb-3' key={item._id}>
                <div className='d-flex  justify-content-evenly mt-2 '>
                  <div>
                    <img  src={item.src} alt='cart-img' className='custom-cart'></img>
                  </div>
                  <div className=' w-50  ms-3 '>
                    <p className='fw-medium mt-4 ms-2'>{item.ParoductName}</p>
                    <p className='fw-medium ms-2'>price:{item.price}</p>
                    <p className='text-info'> (Delivery date will be send to ur registered mobile number)</p>
                    <p className='fw-medium'>Qty: <button onClick={()=>decrementQty(item._id)}>-</button> {`${item.qty}`} <button onClick={()=>incrementQty(item._id)}>+</button></p>
                  </div>
                </div>
                <div className='text-center'>
                <button className='btn btn-danger mb-2 me-3 border  fw-medium'onClick={()=>removeItem(item._id)} >Remove</button>
                <div></div>
              </div>
             </div>  
            )
          })
         }
        </div>
        <div>
          <div className='border rounded-4 p-3 m-3  border-dark ms-5 text-center'>
            <h4 className='text-decoration-underline'>Order summary</h4>
            <div className='p-3 mt-2'>
              <p className='fw-medium fs-5'>Subtotal:{cartItems.reduce((acc,item) => (acc+item.qty),0)} (units)</p>
              <p className='fw-medium fs-5'>Total Amount:${cartItems.reduce((acc,item) => (acc+item.qty *item.price),0)}</p>
            </div>
            <div>
            <Link to={'/orderpage'}><button type="button" className="btn btn-warning fw-medium" onClick={()=>updateAmount()}>Order Now</button></Link>
            </div>
          </div>
        </div>
         
        
        
         
       </>
        :
        <>
        
        </>
      }
     
     </section>
     <div>
      {!cartItems.length && !cartloading ? 
       <>
        <p className='fw-medium text-center m-5 fs-3 '>Cart is Empty ! </p>
        <div className='text-center mt-2'>
          <Link to={'/'}><button type="button" className="btn btn-info fw-medium mb-2">Purchase Items</button></Link>
        </div>
        </>:<></>
      }
      </div>
      
    </div>
  )
}

export default CartView