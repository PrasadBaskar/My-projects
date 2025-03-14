import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {database, ref, set, push} from "../firebaseConfig"

const Dashboard = () => {

    const [text, setText] = useState('Enter the text..');

    const handleDashboard = async()=>{
        const data = ref(database,"surveyContent/");
        const newData = push(data);
        set(newData, {text})
        .then(()=> alert('data saved successfully'))
        .catch((error) => console.log(error));
    }
const navigate = useNavigate();

    const handleLogout = ()=>{
        navigate('/Login')
    }
  return (
    <>
    <div>Dashboard</div>
    <div><button onClick={handleLogout}>Logout</button></div>
    <div><p>a test survey is taken please enter your comment</p></div>
    <div>
        <textarea name='test' id='text' onChange={(e)=>setText(e.target.value)} value={text}></textarea>
    </div>
    <button onClick={handleDashboard}>submit the survey</button>
    </>
  )
}

export default Dashboard