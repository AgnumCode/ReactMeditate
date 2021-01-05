import "./App.css";
import React from "react";
import { DataProvider } from "./Context/DataContext.js";
import Navigation from "./Components/Navigation.js";
import Sessions from "./Components/Sessions.js";
import CreateAccount from "./Components/CreateAccount.js"
import Home from "./Components/Home.js";
import SignIn from "./Components/SignIn.js";
import Timer from "./Components/Timer.js";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <DataProvider>
        <Router>
          <Navigation />
          <Container fluid>
            <Row>
              <Col className="nomargins" xs={12} sm={12} md={12} lg={12}>
                <Timer />
              </Col>
            </Row>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/Home">
                <Row>
                  <Col className="nomargins" xs={12} sm={12} md={12} lg={12}>
                    <Home />
                  </Col>
                </Row>
              </Route>
              <Route exact path="/Login">
                <Row>
                  <Col className="nomargins" xs={12} sm={12} md={12} lg={12}>
                    <SignIn />
                  </Col>
                </Row>
              </Route>
              <Route exact path="/SignIn/CreateAccount">
                <Row>
                  <Col>
                    <CreateAccount />
                  </Col>
                </Row>
              </Route>
              <Route exact path="/Countdown">
                <Row>
                  <Col>
                  
                  </Col>
                </Row>
              </Route>
              <Route exact path="/Sessions">
                <Row>
                  <Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Sessions />
                    </Col>
                  </Col>
                </Row>
              </Route>
            </Switch>
          </Container>
        </Router>
      </DataProvider>
    </>
  );
};

export default App;
