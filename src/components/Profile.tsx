import React, { useContext } from 'react'
import UserContext from '../context/User';

const Profile = () => {
    const {user} = useContext(UserContext);
 
    if(!user)  return <h1 className='p-2'> Please login first</h1>
       return (
        <div>
            <h1 className='p-2'> Welcome {user.username}</h1>
        </div>
       )
  
}

export default Profile
