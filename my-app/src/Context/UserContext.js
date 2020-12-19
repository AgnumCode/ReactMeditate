import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
  
  const [user, setUserInfo] = useState({
    username: null,
    isLoggedIn: false,
    theme: "default"
  });

  return (
    <UserContext.Provider value={[user, setUserInfo]}>
      {children}
    </UserContext.Provider>
  );
};