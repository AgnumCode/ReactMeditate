import "./css/Sessions.css";
import "../bootstrap.min.css";
import React, { useRef, useContext, useState, useEffect } from "react";
import SessionItem from "./SessionItem";
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
    if(sessionContainerScrollIntoRef) 
      sessionContainerScrollIntoRef.current.scrollIntoView();
  }, [sessionContainerScrollIntoRef]);

  useEffect(() => {
    session.length < 1
      ? setSessionContainerStyle("sessionContainerEmpty")
      : setSessionContainerStyle("sessionContainer");
  }, [session.length]);

  useEffect(() => {

    return () => {
    }
  }, [user])

  const handleEmptyList = () => {
    return user.sessions.length === 0
      ? "showEmptySessionText"
      : "hideEmptySessionText";
  };

  return (
    <div ref={sessionContainerScrollIntoRef}>
      <div className={sessionContainerStyle}>
        {user.isLoggedIn ? (
          <div>
            <div className={handleEmptyList()}>No sessions recorded!</div>
            <SessionItem
              sessionItemStyle={sessionItemStyle}
              user={user}
              setUser={setUser}
            />
          </div>
        ) : (
          <div className="showEmptySessionText">Sign in to see sessions.</div>
        )}
      </div>
    </div>
  );
};

export default Sessions;
