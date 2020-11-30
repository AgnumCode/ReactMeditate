import { SessionContext } from '../Context/SessionContext.js'
import React, { useContext } from 'react';
import '../bootstrap.min.css'

const Sessions = () => {

    const [session, setSession] = useContext(SessionContext);

    return (
        <div className="sessionContainer">  
                <div>
                    {session.map((sessions) => {
                        return (<div className="sessionItem" key={sessions.id}>

                            <div>Meditation Date - {sessions.dateMeditated}</div>
                            <div>Meditation Time - {sessions.meditationTime}
                             </div>
                        </div>
                        )
                    })}
            </div>
        </div>

    )

}

export default Sessions