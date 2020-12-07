import './App.css';
import React from "react"
import Timer from './Components/Timer.js'
import Sessions from './Components/Sessions.js'
import Home from './Components/Home.js'
import SignUp from './Components/SignUp.js'
import { SessionProvider } from "./Context/SessionContext.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const App = () => {

  return (
    <div className="main">
      <SessionProvider>
        <Router>
          <Timer />
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Sessions">
              <Sessions />
            </Route>
          </Switch>
          <nav className="navigationContainer">
            <span>              
            <NavLink activeStyle={{ color: '#222' }} to="/Home">Home</NavLink>
            <NavLink activeStyle={{ color: '#222' }} to="/Signup">Sign Up</NavLink>
            <NavLink activeStyle={{ color: '#222' }} to="/Sessions">Sessions</NavLink>
            </span>
          </nav>
        </Router>
      </SessionProvider>
    </div>

  )
}

export default App
