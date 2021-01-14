import "./css/Sessions.css";
import "../bootstrap.min.css";
import React, { useRef, useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext.js";

const Sessions = () => {
  const sessionContainerScrollIntoRef = useRef(null);
  const [user, setUser] = useContext(DataContext);
  // eslint-disable-next-line
  const [session, setSession] = useState([user.session]);
  const [sessionContainerStyle, setSessionContainerStyle] = useState(
    "sessionContainer"
  );
    // eslint-disable-next-line
  const [sessionItemStyle, setSessionItemStyle] = useState("sessionItem");

  useEffect(() => {
    if (sessionContainerScrollIntoRef) {
      sessionContainerScrollIntoRef.current.scrollIntoView();
    }
  }, [sessionContainerScrollIntoRef]);

  useEffect(() => {
    session.length < 1
      ? setSessionContainerStyle("sessionContainerEmpty")
      : setSessionContainerStyle("sessionContainer");
  }, [session.length]);

  //delete an item from the session list
  const deleteSessionItem = (key) => {
    /* future :: add prompt box here to confirm */
    setUser({
      ...user,
      sessions: user.sessions.filter((element) => element.id !== key),
    });
  };

  return (
    <div ref={sessionContainerScrollIntoRef}>
      <div className={sessionContainerStyle}>
        {user.isLoggedIn ? (
          <div>
            <div
              className={
                user.sessions.length === 0
                  ? "showEmptySessionText"
                  : "hideEmptySessionText"
              }
            >
              No sessions recorded!
            </div>
            {user.sessions.map((sessions) => {
              return (
                <div key={sessions.id} className={sessionItemStyle}>
                  <button
                    onClick={() => {
                      deleteSessionItem(sessions.id);
                    }}
                    type="button"
                    className="ml-2 mb-1 close"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="toast-header">
                    <strong className="mr-auto">
                      Session Details - #{String(sessions.id).slice(0,5)}
                    </strong>
                    <small>{sessions.dateMeditated}</small>
                  </div>
                  <div className="toast-body">
                    Session duration - {sessions.meditationTime}
                    {sessions.clock_mode === "Countdown" && (
                      <>
                        <br />
                        {"Completed session - " + sessions.completed}
                        {sessions.completed === "No" && (
                          <>
                            <br />
                            {"Time left - " + sessions.timeLeft}
                          </>
                        )}
                      </>
                    )}
                    <br />
                    Clock - {sessions.clock_mode}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="showEmptySessionText">Sign in to see sessions.</div>
        )}
      </div>
    </div>
  );
};

export default Sessions;
