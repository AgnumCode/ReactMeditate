import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import { useHistory } from "react-router";
import "./css/Timer.css";

const Timer = () => {
  // eslint-disable-next-line
  const [defaultTime, setDefaultTime] = useState(0);
  const [user, setUser] = useContext(DataContext);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [timerFormat, setTimerFormat] = useState(
    new Date(currentTime * 1000).toISOString().substr(11, 8)
  );
  const history = useHistory();

  useEffect(() => {
    if (timerRunning) {
      const id = setInterval(
        () => {
          setCurrentTime((currentTime) => currentTime + 1);
          setTimerFormat(
            new Date(currentTime * 1000).toISOString().substr(11, 8)
          );
        },
        currentTime === 0 ? 1 : 1000
      );
      return () => {
        clearInterval(id);
      };
    }
  }, [timerRunning, currentTime]);

  const resetTimer = (defaultTimeInSeconds) => {
    setTimerRunning(false);
    setCurrentTime(defaultTimeInSeconds);
    setTimerFormat(0);
  };

  const saveSession = (timeInSeconds) => {
    if (user.isLoggedIn) {
      setTimerRunning(false);
      setCurrentTime(0);
      setTimerFormat(null);
      const date = new Date();
      setUser({
        ...user,
        sessions: [
          {
            id: new Date().getUTCMilliseconds(),
            meditationTime: new Date(timeInSeconds * 1000 - 1)
              .toISOString()
              .substr(11, 8),
            dateMeditated:
              date.getUTCMonth() +
              "/" +
              date.getUTCDate() +
              "/" +
              date.getFullYear(),
          },
          ...user.sessions,
        ],
      });
      history.push("/Sessions");
    } else {
      setTimerRunning(false);
      setCurrentTime(0);
      setTimerFormat(null);
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
            onClick={() => resetTimer(defaultTime)}
          >
            Reset Clock
          </button>
          <button
            className="timerBtn disabledBtn btn btn-warning"
            disabled={currentTime === 0}
            onClick={() => saveSession(currentTime)}
          >
            Save Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
