import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SignInCard from '../components/SignInCard'
import Card from '../components/Card'
import 'firebase/auth'

import google from '../GLogo.png'
import apple from '../AppleLogo.png'
//import GoogleAuthButton from '../components/GoogleAuthButton';


//import { auth } from '../firebaseConfig'
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

 
function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  //const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //await signInWithEmailAndPassword(auth, email, password);
      //await firebase.auth().signInWithEmailAndPassword(email, password)
      history('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="container">
      <div className="leftContainer">
        Board.
      </div>
      <div className="rightContainer">
        <div className="loginContainer">
          <div className='signin-heading'>
            <span style={{fontSize: '36px', fontFamily: "'Montserrat', sans-serif"}}>Sign In</span>
            <br></br> 
            <p>Sign in to your account</p>
          </div>
          <div className='easySignIn'>
            <Card width="180px" height="30px" bgColor="#fff" borderRadius="10px" styleName="style1">
              <img src={google} alt='GLogo'/>
              <p>Sign in with Google</p>
            </Card>
            <Card width="180px" height="30px" bgColor="#fff" borderRadius="10px" styleName="style1">
            <img src={apple} alt='AppleLogo'/>
            <p>Sign in with Apple</p>
            </Card>
          </div>
          {/* <GoogleAuthButton/> */}
          <SignInCard>
            <form onSubmit={handleSubmit}>
              <label htmlFor='email'>Email address</label>
              <input
              id='email'
              type='email'
              value={email}
              placeholder='enter email here'
              onChange={(event) => setEmail(event.target.value)}
              />
              <label htmlFor='password'>Password</label>
              <input
              id='password'
              type='password'
              value={password}
              placeholder='password'
              onChange={(event) => setPassword(event.target.value)}
              />
              <label htmlFor='signin'><span style={{color: '#346bd4'}}>Forgot password?</span></label>
              <button id='signin' type="submit" className='signInButton'>Sign In</button>
            </form>
          </SignInCard>
          <div style={{marginTop:'20px'}}>
            <span style={{color:'#858585'}}>Don't have an account?</span> <span style={{color:'#346bd4'}}>Register here</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage