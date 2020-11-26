import { SessionContext } from '../Context/SessionContext.js'
import React, { useContext } from 'react';
import '../bootstrap.min.css'

const Sessions = () => {

    const [session, setSession] = useContext(SessionContext);

    return (
        <div className="sessionContainer">  
            {/* <button className="sessionCalcTotal" onClick={this.state.calculateMeditationMinutes}>
            Count total minutes meditated {this.state.totalMinutes}
            </button> */}
                <div className="sessionList">
                    {session.map((sessions) => {
                        return (<div className="sessionItem" key={sessions.id}>

                            <div>Meditation Date - {sessions.dateMeditated}</div>
                            <div>Time Goal - {sessions.timeGoal[2]} 
                                             {sessions.timeGoal[2] === 1 ? " hour" : " hours"}, {" "}
                                             {sessions.timeGoal[1]} 
                                             {sessions.timeGoal[1] === 1 ? " minute" : " minutes"}</div>
                            <div>Meditation Time - {sessions.meditationTime[2] === 0 ? "00" : sessions.meditationTime[2]}:
                                                   {sessions.meditationTime[1] === 0 ? "00" : sessions.meditationTime[1]}:
                                                   {sessions.meditationTime[0] === 0 ? "00" : sessions.meditationTime[0]}
                             </div>
                            <div>Completed - {sessions.completed}</div>
                        </div>
                        )
                    })}
            </div>
        </div>

    )

}

export default Sessions