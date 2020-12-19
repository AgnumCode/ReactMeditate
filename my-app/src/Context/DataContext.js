import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext(undefined);
export const DataProvider = ({ children }) => {

  const [userList, setUserList] = useState([
      {
        username: "admin",
        password: "admin",
        id: 1928873,
      },
      {
        username: "jerry",
        password: "jay123",
        id: 1238317,
      }
  ]);

  return (
    <DataContext.Provider value={[userList, setUserList]}>
      {children}
    </DataContext.Provider>
  );
};

