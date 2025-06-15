import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { BackendContext } from './context/Context';

const ViewShirt = ({ cartItems, setCartItems, name }) => {
  const { user } = useContext(BackendContext);
  const { id } = useParams();
  const [objItem, setObjItem] = useState(null); // Start as null
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://full-stack-ecommerce-mini.onrender.com/api/tshirts/${id}`);
        setObjItem(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
        alert(err.response ? `Error: ${err.response.status}` : 'An error occurred');
      }
    };
    fetchItem();
  }, [id]); // Depend on id to avoid infinite loops

  const incrementQty = () => {
    if (qty < 10) {
      setQty(qty + 1);
    } else {
      toast('Stock is limited');
    }
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addToCart = async () => {
    if (!user) {
      toast('Please log in to add items');
      return;
    }

    const cartObj = { ...objItem, qty, username: name };
    const exists = cartItems.find((item) => item._id === cartObj._id);

    if (exists) {
      toast('Item already added to cart');
      return;
    }

    setCartItems([...cartItems, cartObj]);
    toast('Item added to the cart');

    try {
      await axios.post('https://full-stack-ecommerce-mini.onrender.com/api/carts/', cartObj);
      console.log('Cart item posted successfully');
    } catch (error) {
      console.error('Failed to post cart item', error);
      toast('Failed to add item to the cart');
    }
  };

  return (
    <section className='d-flex justify-content-evenly changes'>
      {objItem ? (
        <>
          <div className='text-center'>
            <img src={objItem.src} alt='shirt' className='custom' />
          </div>
          <div className='ms-3 custopa'>
            <ToastContainer position='top-center' />
            <p className='fw-medium fs-3 text-center'>{objItem.title || 'Men Regular Fit Checkered Spread Collar Casual Shirt'}</p>
            <p className='mt-2 text-center fw-medium'>Price: {objItem.price}</p>
            <p className='mt-2 text-center'>All sizes available</p>
            <p className='mt-2 text-center fw-medium'>Grab soon, offers end soon!</p>
            <p className='fw-medium fs-5 text-center'>
              Qty: <button onClick={decrementQty}>-</button> {qty} <button onClick={incrementQty}>+</button>
            </p>
            <div className='text-center'>
              <button className='btn btn-warning fw-medium mt-2 mb-2' onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </>
      ) : (
        <p className='fw-medium text-center m-5 fs-3'>Please wait...</p>
      )}
    </section>
  );
};

export default ViewShirt;
