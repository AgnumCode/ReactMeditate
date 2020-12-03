import { SessionContext } from '../Context/SessionContext.js'
import React, { useContext, useLayoutEffect, useState } from 'react';
import '../bootstrap.min.css'

const Sessions = () => {

    const [session, setSession] = useContext(SessionContext);
    const [sessionLength, setSessionLength] = useState(session.length)
    const [sessionContainerStyle, setSessionContainerStyle] = useState('sessionContainer')

    useLayoutEffect(() => {
    //if length of sessions will approach value where a scrollbar is unnecessary, change style
    (sessionLength - 1 <= 2) ? setSessionContainerStyle('sessionContainerEmpty') :
                               setSessionContainerStyle('sessionContainer')
    
        setSessionLength(session.length)

    }, [sessionLength, session.length])

    //delete an item from the session list
    const deleteSessionItem = (key) => {
        /* future :: add prompt box here to confirm */
        setSession(() => {
            return session.filter(element => element.id !== key);
        });
    }

    return (
        <div className={sessionContainerStyle}>
            <div className={sessionLength === 0 ? 'showEmptySessionText' : 'hideEmptySessionText'}>
                No sessions recorded!
            </div>
            {session.map((sessions) => {
                return (
                    <div key={sessions.id} className="sessionItem toast show" aria-atomic="true">
                        <button onClick={() => {
                            deleteSessionItem(sessions.id)
                        }} type="button" className="ml-2 mb-1 close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="toast-header">
                            <strong className="mr-auto">Session Details</strong>
                            <small>{sessions.dateMeditated}</small>
                        </div>
                        <div className="toast-body">
                            Session duration - {sessions.meditationTime}
                        </div>
                    </div>
                )
            })}
        </div>)
}

export default Sessions