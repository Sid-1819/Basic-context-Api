import React, { useState } from "react";
import UserContext from "./User";
import Login from "../components/Login";
import Profile from "../components/Profile";

const UserContextProvider = ({children:any}) =>{

    const [user, setUser] =useState(null);

    return(
        <UserContext.Provider value={{user,setUser}}>
            <Login/>
            <Profile/>
        </UserContext.Provider> 
    )

}

export default UserContextProvider;