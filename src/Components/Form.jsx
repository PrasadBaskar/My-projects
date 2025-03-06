import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [formdata, setformdata] = useState({
username:'john',
email:'john@gmail.com',
phone:'1234567890'
})

const [errorname, seterrorname] = useState('');
const [erroremail, seterroremail] = useState('');
const [errorphone, seterrornphone] = useState('');

const handleChange = (e) =>{
    setformdata(
        {...formdata,[e.target.name]: e.target.value}
    )
}

const handleSubmit = (e) =>{
  e.preventDefault();

  if(!formdata.username.trim()){
    seterrorname('Name is required');
  }
  if(!formdata.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    seterroremail('Invalid email format');
  }
  if(!formdata.phone.match(/^\+?[1-9]\d{1,14}$/)){
    seterrornphone('Invalid phone number');
  }
}
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
     <label htmlFor="name">Name</label>
      <input type="text" name="username" id="name" placeholder='enter your full name' value={formdata.username} onChange={handleChange}/ >
    {errorname&& <p style={{'color':'red'}}>{errorname}</p>}
    </div>
    <br/>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder='enter your email' value={formdata.email} onChange={handleChange}/>
    {erroremail&& <p style={{'color':'red'}}>{erroremail}</p>}
    </div>
    <br/>
    <div>
    <label htmlFor="phone">Mobile Number</label>
    <input type="tel" name="phone" id="phone"placeholder='enter 10 digit number' value={formdata.phone} onChange={handleChange}/>
    {errorphone&& <p style={{'color':'red'}}>{errorphone}</p>}
    </div>
    <div>
    <button>submit</button>
    </div>

    </form>
    
    </>
  )
}

export default Form