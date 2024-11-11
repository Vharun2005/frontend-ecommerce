import React from 'react'
import { useParams } from 'react-router-dom'

const ViewTshirt = ({tshirts,handleCartTshirt}) =>   {
    const {id} = useParams()
    const objitem = tshirts.find((item)=> (item.id).toString() === id)
  return (
    <section className='d-flex justify-content-evenly changes'>
      
        {objitem &&
          <>
           <div className='text-center '>
            <img src={objitem.src} alt='shirt-img' className='custom'></img>
           </div>
           <div className='   ms-3 custopa'>
             <p className='fw-medium fs-3 text-center'>Men's Regular Fit Formal Tshirt </p>
             <p className='mt-2 text-center fw-medium '>Price:{objitem.price}</p>
             <p className='mt-2 text-center'>All sizes are Avilable</p>
             <p className='mt-2 text-center fw-medium' >Grab soon Offers Ends Soon</p>
             <div className='text-center'>
             <button className="btn btn-warning fw-medium mt-2 mb-2" onClick={()=>handleCartTshirt(objitem.id)}>Add to Cart</button>
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

export default ViewTshirt