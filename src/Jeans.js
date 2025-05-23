import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Jeans = ({jeanpants,jeanloading}) => {
    
   

  return (
    <section>
        <div className="con">
        <p className={jeanloading ? 'loader' :''}></p>
      </div>
        <h3 className='tfont text-center display-4 fw-bold mt-3 mb-2'>Jean Pants</h3>
            <Container>
                        <Row className=''>
                            {jeanpants.length ? 
                                jeanpants.map((item) => {
                                    return(
                                     
                                        <Col className='text-center mt-4' lg={4} md={6} sm={12} key={item._id}>
                                            <div className='border border-danger-subtle mb-1 rounded'>
                                                <img src={item.src} alt='t-shirt' width={250} height={250} className='mt-2'></img>
                                                <p className='fw-medium fs-3 pt-2'>Price:{item.price}</p>
                                                <Link className='' to={`/jeans/${item._id}`}><button type="button" className="btn btn-warning fw-medium mb-2">View Product</button></Link>
                                            </div>
                                        </Col>
                                      
                                    );
                                }):<p className='text-center'>please wait ...</p>
                            }
                        
                        </Row>
                    </Container>
    </section>
  )
}

export default Jeans