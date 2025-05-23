import React, { useState } from 'react'
import SignupPage from '../SignupPage';
import Signsecondpage from '../Signsecondpage';
import './authpage.css'

const Authpage = () => {
    const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className={`auth-container ${isLogin ? 'rotate-to-login' : 'rotate-to-signup'}`}>
      {isLogin ? <SignupPage toggleForm={toggleForm} /> : <Signsecondpage toggleForm={toggleForm} />}
    </div>
  )
}

export default Authpage