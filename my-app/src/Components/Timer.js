import React from 'react'

class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            //@currentTime - displayed time
            currentTime: 10,
            //@intervalID - countdown interval function name
            intervalID: '',
            //@defaultTime - fallback count - will be used when no values present
            defaultTime: 10,
            //@topTime - calculating total meditation time from current time
            topTime: 20
        }
    }

    countDownController = () => {
        if (!this.state.intervalID) {
            this.state.intervalID = setInterval(() => {
                this.setState((prevState) => {
                    return {
                        currentTime: prevState.currentTime - 1
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

    resetClock = () => {
        this.setState({
            currentTime: this.state.defaultTime,
            intervalID: ''
        });

        clearInterval(this.state.intervalID);

    }

    render() {
        return (

            <div>
                <div>
                    {this.state.currentTime}
                </div>
                <span>
                    <button onClick={this.countDownController}>
                        {this.state.intervalID ? "Pause" : "Start"}
                    </button>
                    {" "}
                    <button onClick={this.resetClock}>
                        Reset Clock
                   </button>
                </span>
            </div>
        )
    }
}

export default Timer