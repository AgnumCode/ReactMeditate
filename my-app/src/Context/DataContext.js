import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext(undefined);
export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(
    {
      isLoggedIn: true,
      username: "admin",
      password: "admin",
      userID: 1928873,
      admin: false,
      sessions: [
        {
          id: 1,
          meditationTime: "01:15:00",
          dateMeditated: "11/2/2020",
          completed: "No",
        },
        {
          id: 53,
          meditationTime: "01:00:00",
          dateMeditated: "11/3/2020",
          completed: "Yes",
        },
        {
          id: 2222,
          meditationTime: "00:15:00",
          dateMeditated: "11/3/2020",
          completed: "No",
        },
        {
          id: 254343,
          meditationTime: "00:15:00",
          dateMeditated: "11/3/2020",
          completed: "No",
        },
        {
          id: 41241242,
          meditationTime: "00:45:00",
          dateMeditated: "11/13/2019",
          completed: "No",
        },
        {
          id: 21223124,
          meditationTime: "00:55:00",
          dateMeditated: "1/26/2019",
          completed: "No",
        },
      ],
    }
  );

  return (
    <DataContext.Provider value={[user, setUser]}>
      {children}
    </DataContext.Provider>
  );
};
