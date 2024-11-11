import React from 'react'
import { Link } from 'react-router-dom'

const Eappliancescontent = ({item}) => {
  return (
    <div className='border border-danger-subtle mb-1 rounded '>
        <img src={item.src} width={200} height={200} alt={item.ProductName} className='mt-2'></img>
        <p className='fw-medium pt-1'>{item.ProductName}</p>
        <p className='fw-medium '>{item.rate}</p>
        <Link to={`/electronics/${item._id}`}><button type="button" className="btn btn-warning fw-medium mb-1">View Product</button></Link>
    </div> 
    
  )
}

export default Eappliancescontent