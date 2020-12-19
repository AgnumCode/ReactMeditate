import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserProvider = ({ children }) => {
  const [user, setUserInfo] = useState({
    isLoggedIn: true,
    theme: "default",
    id: null,
    totalMeditationMinutes: null,
  });

  return (
    <UserContext.Provider value={[user, setUserInfo]}>
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(undefined);
