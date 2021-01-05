import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import { useHistory } from "react-router";
import { v4 as uuidv4, v4 } from "uuid";
import "./css/Timer.css";

const Timer = () => {
  const defaultCountDownTime = 10;
  // eslint-disable-next-line
  const [countDownTime, setCountDownTime] = useState(defaultCountDownTime);
  const [clockMode, setClockMode] = useState(true);
  const [user, setUser] = useContext(DataContext);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [timerFormat, setTimerFormat] = useState(
    new Date(currentTime * 1000).toISOString().substr(11, 8)
  );
  const [modeNotification, setModeNotification] = useState(
    "modeNotificationHide"
  );
  const history = useHistory();
  const timeFormatter = (time) => {
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  useEffect(() => {
    setModeNotification("modeNotification");
    const id = setTimeout(() => {
      setModeNotification("modeNotificationHide");
    }, 2000);
    return () => clearTimeout(id);
  }, [clockMode]);

  useEffect(() => {
    if (timerRunning && clockMode === true) {
      const id = setInterval(() => {
        setCurrentTime((currentTime) => currentTime + 1);
        setTimerFormat(timeFormatter(currentTime));
      }, 500);
      return () => {
        clearInterval(id);
      };
    } else if (timerRunning && clockMode === false) {
      const id = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
        setTimerFormat(timeFormatter(currentTime));
      }, 500);
      return () => {
        clearInterval(id);
      };
    }
  }, [timerRunning, currentTime, clockMode, countDownTime]);

  const resetTimer = () => {
    //TODO
    // setCurrentTime(0);
    // setTimerRunning(false);
    // setTimerFormat("00:00:00");
  };

  const saveSession = (timeInSeconds) => {
    if (user.isLoggedIn) {
      const date = new Date();
      setUser({
        ...user,
        sessions: [
          {
            id: uuidv4(),
            clock_mode: clockMode ? "Timer" : "Countdown",
            meditationTime: currentTime, //clockMode
            //   ? timeFormatter(timeInSeconds)
            //   : timeFormatter(defaultCountDownTime),
            completed: currentTime === 0 ? "Yes" : "No",
            timeLeft: currentTime, //timeFormatter(currentTime),
            dateMeditated:
              date.getUTCMonth() +
              "/" +
              date.getDay() +
              "/" +
              date.getFullYear(),
          },
          ...user.sessions,
        ],
      });
      history.push("/Sessions");
      resetTimer();
    }
  };

  const switchClockType = () => {
    //TODO
    if (clockMode) {
      setClockMode(false);
    } else {
      setClockMode(true);
    }
  };

  return (
    <div className="timerContainer">
      <div className="timerContainerBackground">
        <div id="circle">
          <div className="timerText">
            {timerFormat ? timerFormat : "00:00:00"}
          </div>
        </div>
        <div className="countDownTimer">
          <br />
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              onClick={() => switchClockType()}
              className="custom-control-input"
              id="clockTypeSwitch"
              defaultChecked={clockMode}
            />
            <label className="custom-control-label" htmlFor="clockTypeSwitch">
              {clockMode ? "Timer set" : "Countdown set"}
            </label>
          </div>
        </div>
        <div className="timerButtonContainer">
          <button
            className="timerBtn btn btn-success"
            onClick={() => setTimerRunning(!timerRunning)}
          >
            {timerRunning ? "Pause" : "Start"}
          </button>
          <button
            className="timerBtn disabledBtn btn btn-primary"
            disabled={currentTime === 0}
            //TODO
            onClick={() => resetTimer(clockMode ? 0 : defaultCountDownTime)}
          >
            Reset Clock
          </button>
          <button
            className="timerBtn disabledBtn btn btn-warning"
            disabled={currentTime === 0 || currentTime === countDownTime}
            onClick={() => saveSession(currentTime)}
          >
            Save Session
          </button>
        </div>
      </div>
      <div className={modeNotification}>
        Mode set is {clockMode ? "timer" : "countdown "}
      </div>
    </div>
  );
};

export default Timer;
