import React from 'react'

class Sessions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            meditationSessions: [{
                id : 1,
                meditationTimeMinutes : 30,
                meditationTimeSeconds : 20,
                dateMeditated: new Date().getUTCDate,
                completed : false
            },
            {
                id : 2,
                meditationTimeMinutes : 25,
                meditationTimeSeconds : 20,
                dateMeditated: new Date().getUTCDate,
                completed : true
            },
            {
                id : 3,
                meditationTimeMinutes : 15,
                meditationTimeSeconds : 20,
                dateMeditated: new Date().getUTCDate,
                completed : true
            }],
            calculateMeditationMinutes : this.countTotalMeditationMinutes,
            totalMinutes : null
        }
    }

    countTotalMeditationMinutes = () => {
        let _totalMinutes = 0;
        for (var item of this.state.meditationSessions) {
            _totalMinutes += item.meditationTimeMinutes
        }
        this.setState(() => {
            return {
                totalMinutes : _totalMinutes
            }
        })
    }

    render() {

        return (

            <div>
                <button onClick={this.state.calculateMeditationMinutes}>
                   Count total minutes meditated
                </button>
                {" "}{this.state.totalMinutes}
            </div>
        )
    }
}

export default Sessions