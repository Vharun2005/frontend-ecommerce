
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
                                
<<<<<<< HEAD
<<<<<<< HEAD
                            }):<h1 className='text-center'>please wait...</h1>
=======
                            }):<h1 className='text-center  '>please wait ...</h1>
>>>>>>> 1499d1b23a97d7855240adc6be2c07ec806fa8b7
=======
                            }):<h1 className='text-center text-warning '>please wait...</h1>
>>>>>>> f9fd2fecfffe65c92726eefe5ec7ef28f6d19928
                        
                      }
                    </Row>
            </Container>
        </section>
    
    
  
  )
}

export default Eappliances
