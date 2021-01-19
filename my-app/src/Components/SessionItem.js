import React, { useState, useEffect } from "react";
import "./css/SessionItem.css";
import { useTransition, animated } from "react-spring";

const SessionItem = ({ user, setUser, sessionItemStyle }) => {
  //delete an item from the session list
  const deleteSessionItem = (key) => {
    /* future :: add prompt box here to confirm */
    setUser({
      ...user,
      sessions: user.sessions.filter((element) => element.id !== key),
    });
  };

  const timeFormatter = (time) => {
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  const transitions = useTransition(user.sessions, (userArray) => userArray.id, {
    config: {mass : 30, velocity: 3, tension: 170, friction: 110, clamp: true},
    from: { transform: "translateY(5000px)" },
    enter: { transform: "translateY(0px)" },
    leave: { transform: "translateY(-5000px)" },
  });

  return (
    <>
      {transitions.map(({ item, props }) => {
        return (
          <animated.div style={props} key={item.id} className={sessionItemStyle}>
            <button
              onClick={() => {
                deleteSessionItem(item.id);
              }}
              type="button"
              className="ml-2 mb-1 close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="toast-header">
              <strong className="mr-auto">
                Session Details - #{String(item.id).slice(0, 5)}
              </strong>
              <small>{item.dateMeditated}</small>
            </div>
            <div className="toast-body">
              Session duration - {item.meditationTime}
              {item.clock_mode === "Countdown" && (
                <>
                  <br />
                  {"Completed session - " + item.completed}
                  {item.completed === "No" && (
                    <>
                      <br />
                      {"Time left - " + timeFormatter(item.timeLeft)}
                    </>
                  )}
                </>
              )}
              <br />
              Clock - {item.clock_mode}
            </div>
          </animated.div>
        );
      })}
    </>
  );
};
export default SessionItem;
