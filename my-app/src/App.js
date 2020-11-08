import './App.css';
import React from "react"
import Timer from './Components/Timer'
import Sessions from './Components/Sessions'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
       <Timer/>
       <Sessions/>

      </div>
    )
  }
}

export default App
