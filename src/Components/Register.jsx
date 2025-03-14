import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebaseConfig";

const Register = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
      const navigate=useNavigate();
    
        const handleRegister = async()=>{
           try{
            await createUserWithEmailAndPassword(auth, email, pass);
            navigate('/Dashboard');
        console.log('user created succesfully')}
            catch(error){
                console.log('user not created')
                
            }

        }
  return (
    <div className='login'>
        <h3>New Register</h3>
         <div>
        <input type='email' class="field" placeholder='Email address or User name' onChange={(e)=>setEmail(e.target.value)}/ >
    </div><br/>
    <div>
        <input type='password' class="field" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
    </div><br/>
    <div>
    <input type='password' class="field" placeholder='Confirm Password'/>
    </div><br/>
    <div><button id='log' onClick={handleRegister}>Register </button></div><br/>
   
    </div>
  )
}

export default Register;