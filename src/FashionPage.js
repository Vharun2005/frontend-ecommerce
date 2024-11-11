import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FashionPage = () => {
  return (
    <section className=' mb-4 mt-4 p-1 demo'>
    
      <Container className=''>
         <Row className=' d-flex justify-content-evenly text-center'>
          
            <Col lg={4} md={6} sm={12}>
             <Link to={'/jeanpants'} className='link text-black'>
              <div >
                  <p className='h3'>Jeans</p>
                  <img src='https://media.istockphoto.com/id/1132154377/photo/jeans.jpg?s=612x612&w=0&k=20&c=T3K1_PdlZxXILKFvGkTmPiIf5M2EdIxkqa79AJT_w0Y=' className='cursor mt-3 mb-4' width={300} height={400} alt='img'></img>
                </div>
              </Link>
            </Col>
          
          <Col lg={4} md={6} sm={12}>
          <Link to={'/shirts'} className='link text-black'>
             <div >
                <p className='h3'>Shirts</p>
                <img src='https://www.kindpng.com/picc/m/722-7226908_white-black-chack-shirt-hd-png-download.png' className='cursor' width={300} height={400} alt='' ></img>
              </div>
          </Link>    
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Link to={'/t-shirts'} className='link text-black'>
             <div >
                <p className='h3 text-center '>T-shirts</p>
                <img src='https://media.istockphoto.com/id/1218949139/photo/black-t-shirt-mock-up-on-wooden-hanger-front-side-view.jpg?s=612x612&w=0&k=20&c=4Z7wPwznxzuichUHw3H85Sh07g1e52yfgAnZUaOKR9c='className='cursor mt-3 mb-4' width={300} height={400} alt='img'></img>
              </div>
            </Link>
          </Col>
         </Row>
              
            

      </Container>

  </section>
   
  )
}

export default FashionPage