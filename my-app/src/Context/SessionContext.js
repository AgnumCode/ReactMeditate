import React, { createContext, useState } from 'react';

export const SessionContext = createContext(undefined);

export const SessionProvider = ({children}) => {

    //seconds, minutes, hours


    const [session, setSession] = useState([{
        id: 1,
        meditationTime: [0, 15, 1],
        timeGoal: [20, 30, 1],
        dateMeditated: "11/2/2020",
        completed: "No"
    },
    {
        id: 2,
        meditationTime: [0, 15, 1],
        timeGoal: [20, 25, 0],
        dateMeditated: "11/3/2020",
        completed: "Yes"
    },
    {
        id: 3,
        meditationTime: [0, 30, 0],
        timeGoal: [20, 15, 0],
        dateMeditated: "11/5/2020",
        completed: "Yes"
    },
    {
        id: 4,
        meditationTime: [0, 15, 0],
        timeGoal: [20, 15, 0],
        dateMeditated: "11/30/2020",
        completed: "Yes"
    }])

    return (
        <SessionContext.Provider value={[session, setSession]}>
            {children}
        </SessionContext.Provider>
    )

}