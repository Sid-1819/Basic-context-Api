import React, { useContext, useState } from 'react'
import UserContext from '../context/User';

const Login = () => {

    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setUser({username,password});
    }

  return (
    
    <div>
      <h1> Login </h1>
        <input className='mx-2 border border-black rounded-lg' type='text' placeholder='Enter your name' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input className='mx-2 border border-black rounded-lg' type='text' placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className='mx-2 hover:bg-blue-800 bg-blue-400 p-1 px-2 rounded-xl text-white' onClick={handleSubmit}>Submit</button>
    </div>
  
  )
}

export default Login
