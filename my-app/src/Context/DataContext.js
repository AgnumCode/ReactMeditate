import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext(undefined);
export const DataProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
      username: "admin",
      password: "admin",
      id: 1928873,
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
    },
    {
      username: "jerry",
      password: "jay123",
      id: 1238317,
      sessions: [{
        id: 3,
        meditationTime: "00:30:20",
        dateMeditated: "11/5/2020",
        completed: "Yes",
    },
    {
        id: 4,
        meditationTime: "00:10:00",
        dateMeditated: "11/30/2020",
        completed: "Yes",
    }]
    }
  ]);

  return (
    <DataContext.Provider value={[userList, setUserList]}>
      {children}
    </DataContext.Provider>
  );
};
