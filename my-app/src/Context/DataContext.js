import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext(undefined);
export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(
    {
      isLoggedIn: false,
      username: "admin",
      password: "admin",
      userID: 1928873,
      sessions: [
        {
          id: 1,
          meditationTime: "01:15:00",
          dateMeditated: "11/2/2020",
          completed: "No",
        },
        {
          id: 5,
          meditationTime: "01:00:00",
          dateMeditated: "11/3/2020",
          completed: "Yes",
        },
        {
          id: 2,
          meditationTime: "00:15:00",
          dateMeditated: "11/3/2020",
          completed: "No",
        }
      ],
    }
  );

  return (
    <DataContext.Provider value={[user, setUser]}>
      {children}
    </DataContext.Provider>
  );
};
