import React, { useState, useEffect, useContext, useCallback } from "react";
import { DataContext } from "../Context/DataContext.js";
import { NotificationContext } from "../Context/NotificationContext.js";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import "./css/Timer.css";

const clockModes = Object.freeze({
  timer: true,
  countDown: false,
});

const initialTimers = Object.freeze({
  defaultTimer: 0,
  defaultCountdown: 600,
});

const initialState = Object.freeze({
  defaultCountdown: 100,
  defaultTimer: 0,
  defaultAbsoluteTimer: 0,
  //Set starting clock mode to timer
  clockMode: clockModes.timer,
  //Timer initially not running
  timerRunning: false,
  timerNewFormat: new Date(initialTimers.defaultTimer * 1000)
    .toISOString()
    .substr(11, 8),
  countDownNewFormat: new Date(initialTimers.defaultCountdown * 1000)
    .toISOString()
    .substr(11, 8),
  defaultFormat: "00:00:00",
});

const Timer = () => {
  const { _notificationText,
          _setNotificationText, 
          _modeNotification,
          _setModeNotification } = useContext(NotificationContext);
  const [_user, _setUser] = useContext(DataContext);
  const [timerRunning, setTimerRunning] = useState(initialState.timerRunning);
  const [clockMode, setClockMode] = useState(initialState.clockMode);
  const [currentTime, setCurrentTime] = useState(
    clockMode ? initialTimers.defaultTimer : initialTimers.defaultCountdown
  );
  const [absoluteTime, setAbsoluteTime] = useState(
    initialState.defaultAbsoluteTimer
  );

  const history = useHistory();

  const timeFormatter = (time) => {
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  const notificationMessage = useCallback(() => {
    return _notificationText;
  }, [_notificationText]);

  //Clock mode switch notification
  useEffect(() => {
    _setModeNotification("notificationShow");
    const id = setTimeout(() => {
      _setModeNotification("notificationHide");
    }, 2000);
    return () => clearTimeout(id);
  }, [clockMode, _notificationText, _setModeNotification]);

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
          _setNotificationText("Countdown has ended.");
        } else {
          setCurrentTime((currentTime) => currentTime - 1);
          setAbsoluteTime((currentTime) => currentTime + 1);
        }
      }, 500);
      return () => {
        clearInterval(id);
      };
    }
  }, [timerRunning, currentTime, clockMode,  _setNotificationText]);

  const resetTimer = (mode) => {
    console.log("resetTimer: " + mode);
    switch (mode) {
      case "COUNTDOWN":
        setClockMode(false);
        _setNotificationText("Countdown is now set.");
        setTimerRunning(initialState.timerRunning);
        setCurrentTime(initialTimers.defaultCountdown);
        break;
      case "TIMER":
        setClockMode(true);
        _setNotificationText("Timer is now set.");
        setTimerRunning(initialState.timerRunning);
        setCurrentTime(initialTimers.defaultTimer);
        break;
      case "RESET":
        setCurrentTime(
          clockMode ? initialTimers.defaultTimer : initialTimers.defaultCountdown
        );
        _setNotificationText("Clock is reset.");
        setTimerRunning(false);
        setAbsoluteTime(initialState.defaultAbsoluteTimer);
        break;
      default:
        break;
    }
  };

  const saveSession = () => {
    if (_user.isLoggedIn) {
      const date = new Date();
      _setUser({
        ..._user,
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
          ..._user.sessions,
        ],
      });
      resetTimer("RESET");
      _setNotificationText("Session was saved.");
      history.push("/Sessions");
    }
  };

  const handleClockSwitch = () => {
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
              onClick={() => handleClockSwitch()}
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
      <div className={_modeNotification}>{notificationMessage()}</div>
    </div>
  );
};

export default Timer;
