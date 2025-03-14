import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



// const Form = () => {
//     const [formdata, setformdata] = useState({
// username:'john',
// email:'john@gmail.com',
// phone:'1234567890'
// })

// const [data, setdata] = useState([]);

// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data)=>{
//     setdata(data.slice(0,5))})
//   .catch((error)=>console.error("Error in loading"))
//   }, []);

// const [errorname, seterrorname] = useState('');
// const [erroremail, seterroremail] = useState('');
// const [errorphone, seterrornphone] = useState('');

// const handleChange = (e) =>{
//     setformdata(
//         {...formdata,[e.target.name]: e.target.value}
//     )
// }

// const handleSubmit = (e) =>{
//   e.preventDefault();

//   if(!formdata.username.trim()){
//     seterrorname('Name is required');
//   }
//   if(!formdata.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
//     seterroremail('Invalid email format');
//   }
//   if(!formdata.phone.match(/^\+?[1-9]\d{1,14}$/)){
//     seterrornphone('Invalid phone number');
//   }
// }


//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//     <div>
//      <label htmlFor="name">Name</label>
//       <input type="text" name="username" id="name" placeholder='enter your full name' value={formdata.username} onChange={handleChange}/ >
//     {errorname&& <p style={{'color':'red'}}>{errorname}</p>}
//     </div>
//     <br/>
//     <div>
//     <label htmlFor="email">Email</label>
//     <input type="email" name="email" id="email" placeholder='enter your email' value={formdata.email} onChange={handleChange}/>
//     {erroremail&& <p style={{'color':'red'}}>{erroremail}</p>}
//     </div>
//     <br/>
//     <div>
//     <label htmlFor="phone">Mobile Number</label>
//     <input type="tel" name="phone" id="phone"placeholder='enter 10 digit number' value={formdata.phone} onChange={handleChange}/>
//     {errorphone&& <p style={{'color':'red'}}>{errorphone}</p>}
//     </div>
//     <div>
//     <button>submit</button>
//     </div>

//     </form>
//     <br/><br/>
//     <h1>100 post API</h1>
//     <ul>
//   {data.length > 0 ? (
//     data.map((item) => {
//       return (
//         <li key={item.id}>
//           <p>{item.title}</p>
//           <p>{item.body}</p>
//         </li>
//       );
//     })
//   ) : (
//     <p>No data available</p> // Optional fallback when data is empty
//   )}
// </ul>
   
//     </>
//   )
// }



const Form = () => {
  const [users,setusers] = useState([]);
  const fetchDataWithAxios = async()=>{
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setusers(response.data.users); // Make sure to access the 'users' property of response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    useEffect(()=>{
      fetchDataWithAxios();
    },[]);

    
    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td> {/* Concatenated first and last name */}
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4">Loading, please wait...</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  };
  
  // Exporting the Form component at the top level.
  export default Form;