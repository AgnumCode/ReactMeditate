import React, { useState, useEffect, useContext } from "react";
import { SessionContext } from "../Context/SessionContext.js";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

const Timer = () => {
  // eslint-disable-next-line
  const [defaultTime, setDefaultTime] = useState(0);
  const [session, setSession] = useContext(SessionContext);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [timerFormat, setTimerFormat] = useState(
    new Date(currentTime * 1000).toISOString().substr(11, 8)
  );

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
    setTimerRunning(false);
    setCurrentTime(0);
    const date = new Date();
    setSession([
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
      ...session,
    ]);
  };

  return (
    <div className="timerContainer">
      <Container>
        <Row>
          <div id="circle" className="timerReadout">
            <div>{timerFormat ? timerFormat : "00:00:00"}</div>
          </div>
        </Row>
        <Row>
            <Col xs/>
            <Col xs="auto" sm="auto" lg="auto"> 
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
          </Col>
          <Col xs/>
        </Row>
      </Container>
    </div>
  );
};

export default Timer;
