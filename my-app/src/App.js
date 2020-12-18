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
            <Row>
              <Col className="nomargins" xs={12} sm={12} md={12} lg={12} >
                <Timer />
              </Col>
            </Row>
            <Switch>
              <Route exact path="/">
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Home />
                  </Col>
                </Row>
              </Route>
              <Route path="/SignUp">
                <Row>
                  <Col>
                    <SignUp />
                  </Col>
                </Row>
              </Route>
              <Route path="/Sessions">
                <Row>
                  <Col />
                  <Col xs={12} sm={10} md={10} lg={8}>
                    <Sessions />
                  </Col>
                  <Col />
                </Row>
              </Route>
            </Switch>
          </Container>
          <nav className="navigationMenu">
                  <NavLink activeStyle={{ color: "black" }} to="/">
                    Home
                  </NavLink>
                  <NavLink activeStyle={{ color: "black" }} to="/Signup">
                    Sign Up
                  </NavLink>
                  <NavLink activeStyle={{ color: "black" }} to="/Sessions">
                    Sessions
                  </NavLink>
                </nav>
        </Router>
      </SessionProvider>
    </div>
  );
};

export default App;
