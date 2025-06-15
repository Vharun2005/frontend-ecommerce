import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const CartView = ({ cartItems, setCartItems, cartloading, name, setAmount }) => {

  const incrementQty = async (id) => {
    try {
      const updatedCart = cartItems.map((item) => {
        if (item._id === id) {
          if (item.qty >= 10) {
            toast('Stock is limited');
            return item;
          }
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);

      const updatedItem = updatedCart.find(item => item._id === id);
      const payload = { ...updatedItem, username: name };
      await axios.patch('/carts', payload);
    } catch (error) {
      console.error('Error incrementing quantity:', error);
      toast('Failed to update quantity');
    }
  };

  const decrementQty = async (id) => {
    try {
      const updatedCart = cartItems.map(item => {
        if (item._id === id) {
          return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
        }
        return item;
      });
      setCartItems(updatedCart);

      const updatedItem = updatedCart.find(item => item._id === id);
      const payload = { ...updatedItem, username: name };
      await axios.patch('https://full-stack-ecommerce-mini.onrender.com/api/carts', payload);
    } catch (error) {
      console.error('Error decrementing quantity:', error);
      toast('Failed to update quantity');
    }
  };

  const removeItem = async (id) => {
    try {
      const updatedCart = cartItems.filter(item => item._id !== id);
      setCartItems(updatedCart);

      await axios.delete('https://full-stack-ecommerce-mini.onrender.com/api/carts', {
        data: { _id: id, username: name }
      });
    } catch (error) {
      console.error('Error removing item:', error);
      toast('Failed to remove item');
    }
  };

  const updateAmount = () => {
    const amount = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    setAmount(amount);
  };

  return (
    <div>
      {cartItems.length ? (
      <section className='d-flex justify-content-evenly flex-direction-column'>
        <div className="con">
          <p className={cartloading ? 'loader' : ''}></p>
        </div>

        
          <>
            <div>
              <ToastContainer position='top-center' />
              {cartItems.map(item => (
                <div className='border mt-2 ms-5 custom-viewcart mb-3' key={item._id}>
                  <div className='d-flex justify-content-evenly mt-2'>
                    <div>
                      <img src={item.src} alt='cart-img' className='custom-cart' />
                    </div>
                    <div className='w-50 ms-3'>
                      <p className='fw-medium mt-4 ms-2'>{item.ParoductName}</p>
                      <p className='fw-medium ms-2'>Price: ${item.price}</p>
                      <p className='text-info'>(Delivery date will be sent to your registered mobile number)</p>
                      <p className='fw-medium'>
                        Qty: 
                        <button onClick={() => decrementQty(item._id)}>-</button> {item.qty} <button onClick={() => incrementQty(item._id)}>+</button>
                      </p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button className='btn btn-danger mb-2 me-3 border fw-medium' onClick={() => removeItem(item._id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className='border rounded-4 p-3 m-3 border-dark ms-5 text-center'>
                <h4 className='text-decoration-underline'>Order Summary</h4>
                <div className='p-3 mt-2'>
                  <p className='fw-medium fs-5'>Subtotal: {cartItems.reduce((acc, item) => acc + item.qty, 0)} (units)</p>
                  <p className='fw-medium fs-5'>Total Amount: ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</p>
                </div>
                <Link to='/orderpage'>
                  <button type="button" className="btn btn-warning fw-medium" onClick={updateAmount}>Order Now</button>
                </Link>
              </div>
            </div>
          </>
      </section>) : (
          <>
            {!cartloading && (
              <div className='text-center'>
                <p className='text-center fs-1'>Cart is Empty</p>
              </div>
            )}
          </>
        )}
    </div>
  );
};

export default CartView;
