import "./App.css";
import React from "react";
import Timer from "./Components/Timer.js";
import Sessions from "./Components/Sessions.js";
import Home from "./Components/Home.js";
import SignUp from "./Components/SignUp.js";
import { SessionProvider } from "./Context/SessionContext.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";


const App = () => {
  return (
    <div className="app">
      <SessionProvider>
        <Router>
          <Container fluid>
            <Timer />
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/Sessions">
                <Row>
                  <Col/>
                  <Col lg={8} sm={8} md={8} xs={8} >
                    <Sessions />
                  </Col>
                  <Col />
                </Row>
              </Route>
            </Switch>
            <nav>
              <NavLink activeStyle={{ color: "#222" }} to="/Home">
                Home
              </NavLink>
              <NavLink activeStyle={{ color: "#222" }} to="/Signup">
                Sign Up
              </NavLink>
              <NavLink activeStyle={{ color: "#222" }} to="/Sessions">
                Sessions
              </NavLink>
            </nav>
          </Container>
        </Router>
      </SessionProvider>
    </div>
  );
};

export default App;
