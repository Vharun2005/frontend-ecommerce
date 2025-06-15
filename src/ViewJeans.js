import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { BackendContext } from './context/Context';

const ViewJeans = ({ cartItems, setCartItems, name }) => {
  const { user } = useContext(BackendContext);
  const { id } = useParams();
  const [jeanItem, setJeanItem] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://full-stack-ecommerce-mini.onrender.com/api/jeans/${id}`);
        setJeanItem(response.data);
      } catch (err) {
        console.error('Error fetching jeans:', err);
        alert(err.response ? `Error: ${err.response.status}` : 'An error occurred');
      }
    };
    fetchItem();
  }, [id]);

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

    const cartObj = { ...jeanItem, qty, username: name };
    const exists = cartItems.find(item => item._id === jeanItem._id);

    if (exists) {
      toast('Item already in cart');
      return;
    }

    setCartItems([...cartItems, cartObj]);
    toast('Item added to cart');

    try {
      await axios.post('https://full-stack-ecommerce-mini.onrender.com/api/carts/', cartObj);
      console.log('Cart item posted successfully');
    } catch (err) {
      console.error('Failed to add to cart:', err);
      toast('Failed to add item to the cart');
    }
  };

  return (
    <section className='d-flex justify-content-evenly changes'>
      {jeanItem ? (
        <>
          <div className='text-center'>
            <img src={jeanItem.src} alt='jeans-img' className='custom' />
          </div>
          <div className='ms-3 custopa'>
            <ToastContainer position='top-center' />
            <p className='fw-medium fs-3 text-center'>{jeanItem.title || 'Men Regular Fit Jean'}</p>
            <p className='mt-2 text-center fw-medium'>Price: {jeanItem.price}</p>
            <p className='mt-2 text-center'>All sizes available</p>
            <p className='mt-2 text-center fw-medium'>Grab soon, offers end soon!</p>
            <div className='text-center'>
              <p className='fw-medium fs-5'>
                Qty: <button onClick={decrementQty}>-</button> {qty} <button onClick={incrementQty}>+</button>
              </p>
              <button className='btn btn-warning fw-medium mt-2 mb-2' onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className='fw-medium text-center m-5 fs-3'>Please wait...</p>
      )}
    </section>
  );
};

export default ViewJeans;
