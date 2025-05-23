
import { useContext, useEffect, useState } from 'react';
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
import Signsecondpage from './Signsecondpage';
import Profile from './componet/Profile';
import axios from 'axios'
import { BackendContext } from './context/Context';
import OrderPage from './componet/OrderPage';

function App() {
  const {user} = useContext(BackendContext)
  const [cartItems,setCartItems] = useState([])
  const [shirtLoading,setShirtLoading] = useState(false)
  const[jeanloading,setjeanloading] = useState(false)
  const [electricLoading,setElectricloading] = useState(false)
  const [cartloading,setcartloading] = useState(false)
  const [name,setname] = useState('')
  const [amount,setAmount] = useState(0)
  axios.defaults.headers.common["Authorization"] = user;


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
    if(name){
    try{
      setcartloading(true)
      const responseFour = await axios.post('http://localhost:3500/api/carts',{username:name})
      const resultFour = await responseFour.data
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
  }else{
    return null
  }
  }
  
  const getNamewithToken = async() =>{
    try{
      const getName = await axios.post('http://localhost:3500/api/validuser')
      const name = await getName.data
      setname(name)
    }catch(err){
      if(err.response){
        alert(err.response.data)
      }else{
        alert('error occured for valid token')
      }
    }
  }
    

  useEffect(()=>{
    const fetchItems = async() =>{
      try{
<<<<<<< HEAD
        setShirtLoading(true)
        const response = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/tshirts')
        const result = await response.json()
        setShirts(result)
=======
        const response = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/tshirts')
        const result = await response.json()
        setShirts(result)
        const responseTwo = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/jeans')
        const resultTwo = await responseTwo.json()
        setJeanpants(resultTwo)
        const responseThree = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/electronics')
        const resultThree = await responseThree.json()
        setElectronics(resultThree)
        const responseFour = await fetch('https://full-stack-ecommerce-mini.onrender.com/api/carts')
        const resultFour = await responseFour.json()
        setCartItems(resultFour)
>>>>>>> 1499d1b23a97d7855240adc6be2c07ec806fa8b7
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
    if(user){
    getNamewithToken()
    }
    fetchItems()
    FetchJeans()
    FetchElectric()
    if(name){
    FetchCart()
    }
  },[name,user])

  const [tshirts,setTshirts] = useState([])
  const [jeanpants,setJeanpants] = useState([])
  const [shirts,setShirts] = useState([])
  const [Electronics,setElectronics] = useState([])



  return (
    
      <div className='main-container'>
        <AppBar/>
        <main>
          <Routes>
            <Route path='/' element={<ProductsContainer/>}></Route>
            <Route path='/electronics' element={<Eappliances Electronics={Electronics} electricLoading={electricLoading}/>}></Route>
            <Route path='/loginpage' element={<LoginPage/>}></Route>
            <Route path='/fashions' element={<FashionPage tshirts={tshirts}/>}/>
            <Route path='/t-shirts' element={<Tshirts/>} />
            <Route path='/jeanpants' element={<Jeans jeanpants={jeanpants} jeanloading={jeanloading}/>} />
            <Route path='/shirts' element={<Shirts shirts={shirts} shirtLoading={shirtLoading}/>} />
            <Route path='/shirts/:id' element={<ViewShirt name={name} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path='/jeans/:id' element={<ViewJeans name={name} jeanloading={jeanloading} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path='/tshirts/:id' element={<ViewTshirt name={name}  shirtLoading={shirtLoading} tshirts={tshirts}/>}></Route>
            <Route path='/electronics/:id' element={<ViewElectronics name={name} cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path='/cart' element={<CartView cartItems={cartItems} name={name} setCartItems={setCartItems} cartloading={cartloading} setAmount={setAmount}/>} />
            <Route path='/login' element={<SignupPage/>}/>
            <Route path='/signup' element={<Signsecondpage/>}/>
            <Route path='/profile' element={<Profile name={name} />}/>
            <Route path='/orderpage' element={<OrderPage amount={amount} setAmount={setAmount}/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
               
   
  );
}

export default App;
