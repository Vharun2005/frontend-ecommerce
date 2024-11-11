import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopRatedDress = () => {
  return (
    <section className=' mb-4 w-75 p-1 demo'>
      <p className='display-5 fw-medium text-center mt-2 mb-4'>Latest Collections</p>
        <Container className='box-shadow-custom '>
           <Row className=' d-flex justify-content-evenly text-center'>
            <Col lg={4} md={6} sm={12}>
               <div >
               <Link to='/shirts'><img src='https://media.istockphoto.com/id/1830111752/photo/black-t-shirt-short-sleeve-mockup.webp?b=1&s=170667a&w=0&k=20&c=mZZDvlgEmek4xYAaqduAAKS2aqoj1w6CU9tA11I9l3g='className='cursor mt-3 mb-4' width={300} height={200} alt='img'></img></Link>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
               <div >
                  <Link to='/shirts'><img src='https://www.tistabene.com/cdn/shop/files/MSH-2465A.jpg?v=1707462141&width=1080' className='cursor mt-3 mb-4' width={200} height={200} alt='img'></img></Link>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
               <div >
               <Link to='/shirts'><img src='https://www.thesamestyle.com/cdn/shop/files/ad516fa9-9505-46c3-9e8f-c82a242a13bb_720x.jpg?v=1718348279'  className='cursor mt-3 mb-4' width={200} height={200} ></img></Link> 
                </div>
            </Col>
           </Row>
                
              

        </Container>

    </section>
  )
}

export default TopRatedDress