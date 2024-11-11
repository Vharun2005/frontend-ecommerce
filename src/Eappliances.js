import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Eappliancescontent from './Eappliancescontent'

const Eappliances = ({Electronics}) => {
 
    
  return (

    
      <section>
        <h3 className='ps-3 text-center  mt-1'>{Electronics.length ? 'Top Rated Products':''}</h3>
            <Container>
               
                
                    <Row>
                      {Electronics.length ? 
                        
                            Electronics.map((item) =>{
                                return (
                                    <Col className='text-center mt-4' key={item._id} lg={4} md={6} sm={12}>
                                    <Eappliancescontent item={item}/> 
                                    </Col>
                                )
                                
                            }):<h1 className='text-center text-warning '>please reload website</h1>
                        
                      }
                    </Row>
            </Container>
        </section>
    
    
  
  )
}

export default Eappliances