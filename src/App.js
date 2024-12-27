
import { useEffect, useState } from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import ProductsContainer from './ProductsContainer';
import { Route, Routes } from 'react-router-dom';
import Eappliances from './Eappliances';
import LoginPage from './LoginPage';
import FashionPage from './FashionPage';
import Tshirts from './Tshirts';
import Jeans from './Jeans';
import Shirts from './Shirts';
import ViewShirt from './ViewShirt';
import ViewJeans from './ViewJeans';
import ViewTshirt from './ViewTshirt';
import ViewElectronics from './ViewElectronics';
import CartView from './CartView';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import SignupPage from './SignupPage';

function App() {
  const [cartItems,setCartItems] = useState([])
  const [shirtLoading,setShirtLoading] = useState(false)
  const[jeanloading,setjeanloading] = useState(false)
  const [electricLoading,setElectricloading] = useState(false)
  const [cartloading,setcartloading] = useState(false)

  const FetchJeans = async() => {
    try{
      setjeanloading(true)
      const responseTwo = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/jeans')
      const resultTwo = await responseTwo.json()
      setJeanpants(resultTwo)
    }catch(err){
      if(err.response){
        console.log(err.response.status)
        toast(`${err.response.status}`)
      }else{
        console.error(err.message)
      }
    }finally{
      setjeanloading(false)
    }
  }

  
      
  const FetchElectric = async() => {
    try{
      const responseTwo = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/electronics')
      const resultTwo = await responseTwo.json()
      setElectronics(resultTwo)
    }catch(err){
      if(err.response){
        console.log(err.response.status)
        toast(`${err.response.status}`)
      }else{
        console.error(err.message)
      }
    }finally{
      setElectricloading(false)
    }
  }
  const FetchCart = async() => {
    try{
      setcartloading(true)
      const responseFour = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/carts')
      const resultFour = await responseFour.json()
      setCartItems(resultFour)
    }catch(err){
      if(err.response){
        console.log(err.response.status)
        toast(`${err.response.status}`)
      }else{
        console.error(err.message)
      }
    }finally{
      setcartloading(false)
    }
  }
    

  useEffect(()=>{
    const fetchItems = async() =>{
      try{
        setShirtLoading(true)
        const response = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/tshirts')
        const result = await response.json()
        setShirts(result)
      }catch(err){
        if(err.response){
          console.log(err.response.status)
          toast(`${err.response.status}`)
        }else{
          console.error(err.message)
        }
      }finally{
        setShirtLoading(false)
      }

    }
    fetchItems()
    FetchJeans()
    FetchElectric()
    FetchCart()
  },[])

  const [tshirts,setTshirts] = useState([])
  const [jeanpants,setJeanpants] = useState([])
  const [shirts,setShirts] = useState([])
  const [Electronics,setElectronics] = useState([])



  return (
    
      <div className='main-container'>
        <AppBar/>
        <div>
          <Routes>
            <Route path='/' element={<ProductsContainer/>}></Route>
            <Route path='/electronics' element={<Eappliances Electronics={Electronics} electricLoading={electricLoading}/>}></Route>
            <Route path='/loginpage' element={<LoginPage/>}></Route>
            <Route path='/fashions' element={<FashionPage tshirts={tshirts}/>}/>
            <Route path='/t-shirts' element={<Tshirts/>} />
            <Route path='/jeanpants' element={<Jeans jeanpants={jeanpants} jeanloading={jeanloading}/>} />
            <Route path='/shirts' element={<Shirts shirts={shirts} shirtLoading={shirtLoading}/>} />
            <Route path='/shirts/:id' element={<ViewShirt  cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path='/jeans/:id' element={<ViewJeans jeanloading={jeanloading} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path='/tshirts/:id' element={<ViewTshirt  shirtLoading={shirtLoading} tshirts={tshirts}/>}></Route>
            <Route path='/electronics/:id' element={<ViewElectronics  cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path='/cart' element={<CartView cartItems={cartItems} setCartItems={setCartItems} cartloading={cartloading} />} />
            <Route path='/login' element={<SignupPage/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
               
   
  );
}

export default App;
