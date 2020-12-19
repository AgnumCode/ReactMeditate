import React, { createContext, useState } from 'react';

export const SessionContext = createContext(undefined);

export const SessionProvider = ({children}) => {

    const [session, setSession] = useState([{
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
    },
    {
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
    }])

    return (
        <SessionContext.Provider value={[session, setSession]}>
            {children}
        </SessionContext.Provider>
    )

}