import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import TopRatedDress from './TopRatedDress'
import SkinCare from './SkinCare'

const ProductsContainer = () => {
  return (
   <div>     
    <Container className='shadow-lg p-3 mt-5 mb-5 bg-body-tertiary roundedm mt-4 d-flex justify-content-evenly'>
      <Link className='link text-black' to='/fashions'>
        <div className=' cursor'>
            <img src='https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=' alt='Dresses' width={130} height={100}></img>
            <p className='h6 pt-2 text-center '>Fashions</p>
        </div>
      </Link>  
        <Link className='link text-black' to='/electronics'>
          <div className=' cursor '>
              <img src='https://st2.depositphotos.com/1001877/6374/i/450/depositphotos_63745311-stock-photo-home-appliances-gas-cooker-tv.jpg'  className='img-queries'  alt='electrions' width={150} height={100}></img>
              <p className='h6 pt-2  space-custom'>Electronics Appliances</p>
          </div>
        </Link>
    </Container>
    <Slider/>
  </div>
    
  )
}

export default ProductsContainer