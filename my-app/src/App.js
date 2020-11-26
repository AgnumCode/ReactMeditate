import './App.css';
import React from "react"
import Timer from './Components/Timer.js'
import Sessions from './Components/Sessions.js'
import { SessionProvider } from "./Context/SessionContext.js"

const App = () => {

  return (
    <div>
    <SessionProvider>
      <Timer />
      <Sessions />
    </SessionProvider>
    </div>

  )
}

export default App
