import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import {Col,Row} from 'react-bootstrap'


const Slider = () => {
  return (
   <Container className='mb-4'>
     <Row className='d-flex justify-content-center'>
       <Col lg={8}>
          <Carousel>
          <Carousel.Item>
            <img src='https://img.freepik.com/free-vector/sale-40-off-discount-banner-discount-offer-price-tag-vector-modern-sticker-illustration_460848-10519.jpg?w=740&t=st=1721737563~exp=1721738163~hmac=2aa46d5e1da21499d9d3691f75ecbf9650d9082642439d4c80b6377a5f4831d9' alt='oofers' className='d-block w-100'></img>
            <Carousel.Caption>
              <h3 className='mt-2 d-none d-sm-block'>Fashions Offers Available</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src='https://img.freepik.com/premium-psd/smartphone-black-friday-mockup-design_185119-766.jpg?w=826' alt='mobile-oofer' className='d-block w-100'></img>
            <Carousel.Caption>
              <h3 className='mt-2 d-none d-sm-block'>Mobile Offers Are Live</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       </Col>
     </Row>
   </Container>
  )
}

export default Slider