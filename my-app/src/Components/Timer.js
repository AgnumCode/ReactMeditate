import React, { useState, useEffect, useContext, useCallback } from "react";
import { DataContext } from "../Context/DataContext.js";
import { useHistory } from "react-router";
import { v4 as uuidv4, v4 } from "uuid";
import "./css/Timer.css";

const clockModes = Object.freeze({
  timer: true,
  countDown: false,
});

const initialTimers = {
  defaultTimer: 0,
  defaultCountdown: 600,
};

const initialState = {
  //Countdown set to 600 seconds
  defaultCountdown: 2,
  defaultTimer: 0,
  defaultAbsoluteTimer: 0,
  //Set starting clock mode to timer
  clockMode: clockModes.timer,
  //Timer initially not running
  timerRunning: false,
  notificationInit: "notificationHide",
  notificationInitMessage: "Welcome.",
  timerNewFormat: new Date(initialTimers.defaultTimer * 1000)
    .toISOString()
    .substr(11, 8),
  countDownNewFormat: new Date(initialTimers.defaultCountdown * 1000)
    .toISOString()
    .substr(11, 8),
  defaultFormat: "00:00:00",
};

const Timer = () => {
  const [timerRunning, setTimerRunning] = useState(initialState.timerRunning);
  const [clockMode, setClockMode] = useState(initialState.clockMode);
  const [currentTime, setCurrentTime] = useState(
    clockMode ? initialTimers.defaultTimer : initialTimers.defaultCountdown
  );
  const [absoluteTime, setAbsoluteTime] = useState(
    initialState.defaultAbsoluteTimer
  );
  const [user, setUser] = useContext(DataContext);
  const [modeNotification, setModeNotification] = useState(
    initialState.notificationInit
  );
  const [notificationText, setNotificationText] = useState(
    initialState.notificationInitMessage
  );
  const history = useHistory();

  const timeFormatter = (time) => {
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  const notificationMessage = useCallback(() => {
    return notificationText;
  }, [notificationText]);

  //Clock mode switch notification
  useEffect(() => {
    setModeNotification("notificationShow");
    const id = setTimeout(() => {
      setModeNotification("notificationHide");
    }, 2000);
    return () => clearTimeout(id);
  }, [clockMode, notificationText]);

  useEffect(() => {
    if (timerRunning && clockMode === clockModes.timer) {
      const id = setInterval(() => {
        setCurrentTime((currentTime) => currentTime + 1);
        setAbsoluteTime((currentTime) => currentTime + 1);
      }, 500);
      return () => {
        clearInterval(id);
      };
      //if countdown timer
    } else if (timerRunning && clockMode === clockModes.countDown) {
      const id = setInterval(() => {
        if (currentTime - 1 === -1) {
          setTimerRunning(false);
          setNotificationText("Countdown has ended.");
        } else {
          setCurrentTime((currentTime) => currentTime - 1);
          setAbsoluteTime((currentTime) => currentTime + 1);
        }
      }, 500);
      return () => {
        clearInterval(id);
      };
    }
  }, [timerRunning, currentTime, clockMode]);

  const resetTimer = (mode) => {
    console.log("resetTimer: " + mode);
    switch (mode) {
      case "COUNTDOWN":
        setClockMode(false);
        setNotificationText("Countdown is now set.");
        setTimerRunning(initialState.timerRunning);
        setCurrentTime(initialTimers.defaultCountdown);
        break;
      case "TIMER":
        setClockMode(true);
        setNotificationText("Timer is now set.");
        setTimerRunning(initialState.timerRunning);
        setCurrentTime(initialTimers.defaultTimer);
        break;
      case "RESET":
        setCurrentTime(
          clockMode ? initialTimers.defaultTimer : initialTimers.defaultCountdown
        );
        setNotificationText("Clock is reset.");
        setTimerRunning(false);
        setAbsoluteTime(initialState.defaultAbsoluteTimer);
        break;
      default:
        break;
    }
  };

  const saveSession = () => {
    if (user.isLoggedIn) {
      const date = new Date();
      setUser({
        ...user,
        sessions: [
          {
            id: uuidv4(),
            clock_mode: clockMode ? "Timer" : "Countdown",
            meditationTime: timeFormatter(absoluteTime),
            completed: clockMode ? "N/A" : currentTime === 0 ? "Yes" : "No",
            timeLeft: clockMode ? "N/A" : timeFormatter(currentTime),
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
      resetTimer("RESET");
      setNotificationText("Session was saved.");
      history.push("/Sessions");
    }
  };

  const switchClockType = () => {
    //TODO
    if (clockMode) {
      resetTimer("COUNTDOWN");
    } else {
      resetTimer("TIMER");
    }
  };

  return (
    <div className="timerContainer">
      <div className="timerContainerBackground">
        <div id="circle">
          <div className="timerText">{timeFormatter(currentTime)}</div>
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
              {clockMode ? "Timer" : "Countdown"}
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
            disabled={false}
            onClick={() => resetTimer("RESET")}
          >
            Reset Clock
          </button>
          <button
            className="timerBtn disabledBtn btn btn-warning"
            disabled={false}
            onClick={() => saveSession()}
          >
            Save Session
          </button>
        </div>
      </div>
      <div className={modeNotification}>{notificationMessage()}</div>
    </div>
  );
};

export default Timer;
