import React, { useRef, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import HomeInfoCards from "./HomeInfoCards.js"
import "./css/Home.css";

const initialState = Object.freeze({
  homePageContainerScrollIntoRef: undefined
})

const Home = () => {
  // eslint-disable-next-line 
  const [user, setUser] = useContext(DataContext);
  const homePageContainerScrollIntoRef = useRef(initialState.homePageContainerScrollIntoRef);

  useEffect(() => {
    if (homePageContainerScrollIntoRef !== null) {
      homePageContainerScrollIntoRef.current.scrollIntoView();
    }
  }, [homePageContainerScrollIntoRef]);

  return (
    <div ref={homePageContainerScrollIntoRef} className="homePageContainer">
      {user.isLoggedIn ? (
        `Hello, ${user.username}.`
      ) : (
        <>
          <div className="jumbotron homeShadow">
            <h4>Welcome to React Meditate!</h4>
            <p className="leadText">
              A simple app to track meditation time, sessions and more to keep
              you on track 🛤️ to a calmer being.
            </p>
            <hr className="my-4" />
            <p className="jumboInfo lightDarkBg p-3">
              What is <span className="badge badge-success">meditation</span> ,
              how can I <span className="badge badge-primary">start</span> and
              what are the <span className="badge badge-info">benefits</span> ?
            </p>
            <HomeInfoCards/>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
