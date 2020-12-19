import "./App.css";
import React, { useContext } from "react";
import { SessionProvider } from "./Context/SessionContext.js";
import { UserProvider } from "./Context/UserContext.js";
import LogInController  from "./Components/LogInController.js"
import Navigation from "./Components/Navigation.js"
import Sessions from "./Components/Sessions.js";
import Home from "./Components/Home.js";
import SignIn from "./Components/SignIn.js";
import Timer from "./Components/Timer.js";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <>
      <SessionProvider>
        <UserProvider>
          <Router>
            <Navigation/>
            <Container fluid>
              <Row>
                <Col className="nomargins" xs={12} sm={12} md={12} lg={12}>
                  <Timer />
                </Col>
              </Row>
              <Switch>
                <Route exact path="/Home">
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Home />
                    </Col>
                  </Row>
                </Route>
                <Route exact path="/Login">
                  <Row>
                    <Col>
                      <LogInController/>
                    </Col>
                  </Row>
                </Route>
                <Route exact path="/Sessions">
                  <Row>
                    <Col />
                    <Col xs={12} sm={0} md={10} lg={8}>
                      <Sessions />
                    </Col>
                    <Col />
                  </Row>
                </Route>
              </Switch>
            </Container>
          </Router>
        </UserProvider>
      </SessionProvider>
    </>
  );
};

export default App;
