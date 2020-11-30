import './App.css';
import React from "react"
import Timer from './Components/Timer.js'
import Sessions from './Components/Sessions.js'
import Nav from './Components/Nav.js'
import { SessionProvider } from "./Context/SessionContext.js"

const App = () => {

  return (
    <div className="main">
    <SessionProvider>
      <Timer />
      <Sessions />
      <Nav/>
    </SessionProvider>
    </div>

  )
}

export default App
