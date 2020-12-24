import React, { useRef, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import "./css/Home.css";

const Home = () => {
  const [user, setUser] = useContext(DataContext);
  const homePageContainerScrollIntoRef = useRef(undefined);

  useEffect(() => {
    if (homePageContainerScrollIntoRef !== null) {
      homePageContainerScrollIntoRef.current.scrollIntoView();
    }
  }, [homePageContainerScrollIntoRef]);

  return (
    <div ref={homePageContainerScrollIntoRef} className="homePageContainer">
      {user.isLoggedIn ? (
        `Hello, ${user[0].username}.`
      ) : (
        <div>
          <div>Welcome to React Meditate!</div>
          <div>Please sign in or create an account.</div>
        </div>
      )}
    </div>
  );
};

export default Home;
