import React from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebaseConfig";
import { useState } from 'react';


const Login = () => {

     const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');

    const navigate=useNavigate();

    const handleLogin = async()=>{
      try  { await signInWithEmailAndPassword(auth, email, pass);
        navigate('/Dashboard');
        console.log("user logged in successfully")
    }catch(error){
        console.log('error')
    }
    }
    const handleCreate=()=>{
        navigate("/Register");
    }
  return (
  <div className='login'>
    <h3>Login or sign up</h3>
    <div>
        <input type='email' class="field" placeholder='Email address or User name' onChange={(e)=>setEmail(e.target.value)}/>
    </div><br/>
    <div>
        <input type='password' class="field" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
    </div><br/>
    <div><button id='log' onClick={handleLogin}>Log in </button></div><br/>
    <div><button id='create' onClick={handleCreate}>Create new account</button></div>
    
    </div>
  )
}

export default Login