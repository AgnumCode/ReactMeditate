import "./css/Sessions.css";
import "../bootstrap.min.css";
import React, {
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import { DataContext } from "../Context/DataContext.js";

const Sessions = () => {
  const sessionContainerScrollIntoRef = useRef(undefined);
  const [user, setUser] = useContext(DataContext);
  const [session, setSession] = useState([user.session]);
  const [sessionLength, setSessionLength] = useState(session.length);
  const [sessionContainerStyle, setSessionContainerStyle] = useState(
    "sessionContainer"
  );

  useEffect(() => {
      if (sessionContainerScrollIntoRef !== null) {
      sessionContainerScrollIntoRef.current.scrollIntoView();
    }
  }, [sessionContainerScrollIntoRef]);

  useEffect(() => {
    //if length of sessions will approach value where a scrollbar is unnecessary, change style
    sessionLength - 1 <= 1
      ? setSessionContainerStyle("sessionContainerEmpty")
      : setSessionContainerStyle("sessionContainer");

    setSessionLength(session.length);
  }, [sessionLength, session.length]);

  //delete an item from the session list
  const deleteSessionItem = (key) => {
    /* future :: add prompt box here to confirm */
    setUser({
      ...user,
      sessions: user.sessions.filter((element) => element.id !== key),
    });
  };

  return (
    <div ref={sessionContainerScrollIntoRef} className={sessionContainerStyle}>
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
              <div key={sessions.id} className="sessionItem">
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
                  <strong className="mr-auto">Session Details</strong>
                  <small>{sessions.dateMeditated}</small>
                </div>
                <div className="toast-body">
                  Session duration - {sessions.meditationTime}
                  <br />
                  Completed Session - {sessions.completed}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="showEmptySessionText">Sign in to see sessions.</div>
      )}
    </div>
  );
};

export default Sessions;
