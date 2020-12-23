import React, { createContext, useState, useContext } from "react";
import { DataContext } from "./DataContext.js" 
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {

  const [userList, setUserList] = useContext(DataContext)
  
  const [user, setUserInfo] = useState({
    username: null,
    isLoggedIn: false,
    session: []
  });

  console.log(user);
  
  return (
    <UserContext.Provider value={[user, setUserInfo]}>
      {children}
    </UserContext.Provider>
  );
};