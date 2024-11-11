import React, { useState ,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tshirts = (  ) => {
    const [tshirts,setTshirts] = useState([])
    useEffect(()=>{
      const fetchItems = async() =>{
        try{
          const res = await fetch('http://localhost:3500/api/tshirt')
          const result = await res.json()
          setTshirts(result)
        }catch(err){
          if(err.response){
            console.log(err.response.status)
            alert(`${err.response.status}`)
          }else{
            console.error(err.message)
          }
        }
  
      }
      fetchItems()
    },[])
      
    
  return (
     <section>
        <h3 className='tfont text-center display-4 fw-bold mt-3 mb-2'>T-shirts</h3>
        <Container>
            <Row className=''>
                { tshirts.length ?
                    tshirts.map((item) => {
                        return(
                            <Col className='text-center mt-4' lg={4} md={6} sm={12} key={item.id}>
                                <div className='border border-danger-subtle mb-1 rounded'>
                                    <img src={item.src} alt='t-shirt' width={250} height={250} className='mt-2'></img>
                                    <p className='fw-medium fs-3 pt-2'>Price:{item.price}</p>
                                    <Link to={`/tshirts/${item.id}`} className='link text-black'><button type="button" className="btn btn-warning fw-medium mb-2">View Product</button></Link>
                                </div>
                            </Col>
                        );
                    }):<h1 className='text-center' style={{color:'red'}}>Collections out of stock </h1>
                }
               
            </Row>
        </Container>
        <Container>

        </Container>
     </section>
  )
}

export default Tshirts