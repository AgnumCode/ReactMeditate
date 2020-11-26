import React from 'react'
import '../App.css';

class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            //@currentTime - displayed time
            currentTime: 0,
            //@intervalID - countdown interval function name
            intervalID: '',
            //@defaultTime - fallback count - will be used when no values present
            defaultTime: 0,
            //@topTime - calculating total meditation time from current time
            topTime: 20
        }
    }

    countUpTime = () => {
        if (!this.state.intervalID) {
            this.state.intervalID = setInterval(() => {
                this.setState((prevState) => {
                    return {
                        currentTime: prevState.currentTime + 1
                    }
                })
            }, 1000);
        } else {
            const _currentTime = this.state.currentTime;
            clearInterval(this.state.intervalID);
            this.setState(() => {
                return {
                    intervalID: '',
                    currentTime: _currentTime
                }
            }
            )
        }
    }

    endSession = () => {
    }

    resetClock = () => {
        this.setState({
            currentTime: this.state.defaultTime,
            intervalID: ''
        });
        clearInterval(this.state.intervalID);
    }

    render() {
        return (

            <div className="headerStyle">
                <div className="timerReadout">
                    {this.state.currentTime}
                </div>
                <div className="startResetButtons" >
                    <button className="btn btn-success" onClick={this.countUpTime}>
                        {this.state.intervalID ? "Pause" : "Start"}
                    </button>
                    {" "}
                    <button className="btn btn-primary" onClick={this.resetClock}>
                        Reset Clock
                   </button>
                   {" "}
                   <button className="btn btn-warning" onClick={this.endSession}>
                        End Session
                   </button>
                </div>
            </div>
        )
    }
}

export default Timer