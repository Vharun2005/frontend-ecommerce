import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Shirts = ({shirts}) => {

    
  return (
    <section>
        <h3 className='tfont text-center display-4 fw-bold mt-3 mb-2'>Shirts</h3>
        <Container>
            <Row>
                {  shirts.length ? 
                    shirts.map((item)=>{
                       return( 
                        <Col className='text-center mt-4' lg={4} md={6} sm={12}>
                             <div className='border border-danger-subtle mb-1 rounded'>
                                    <img src={item.src} alt='t-shirt' width={250} height={250} className='mt-2'></img>
                                    <p className='fw-medium fs-3 pt-2'>Price:{item.price}</p>
                                    <p muted className=''>Free delivery</p>
                                    <Link to={`/shirts/${item._id}`} className='link text-black'><button type="button" className="btn btn-warning fw-medium mb-2">View Product</button></Link>
                             </div>
                        </Col>
                       )
                    }):<p className='text-center '>Please reload the website</p>
                }
            </Row>
        </Container>
    </section>
  )
}

export default Shirts