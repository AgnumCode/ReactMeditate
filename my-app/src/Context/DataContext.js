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
      admin: false,
      sessions: [
        {
          id: uuidv4(),
          clock_mode: "Timer",
          meditationTime: "01:15:00",
          dateMeditated: "11/2/2020",
          completed: "N/A",
          timeLeft: 0
        },
        {
          id: uuidv4(),
          clock_mode: "Countdown",
          meditationTime: "01:00:00",
          dateMeditated: "11/3/2020",
          completed: "Yes",
          timeLeft: 0
        },
        {
          id: uuidv4(),
          clock_mode: "Timer",
          meditationTime: "00:15:00",
          dateMeditated: "11/3/2020",
          completed: "N/A",
          timeLeft: 0
        },
        {
          id: 254343,
          clock_mode: "Timer",
          meditationTime: "00:15:00",
          dateMeditated: "11/3/2020",
          completed: "N/A",
          timeLeft: 0
        },
        {
          id: uuidv4(),
          clock_mode: "Countdown",
          meditationTime: "00:45:00",
          dateMeditated: "11/13/2019",
          completed: "No",
          timeLeft: 250
        },
        {
          id: uuidv4(),
          clock_mode: "Countdown",
          meditationTime: "00:55:00",
          dateMeditated: "1/26/2019",
          completed: "No",
          timeLeft: 600
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
